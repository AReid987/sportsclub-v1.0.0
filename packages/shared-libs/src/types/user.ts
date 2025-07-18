import { BaseEntity, Status } from './common';

export interface User extends BaseEntity {
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  avatar?: string;
  status: Status;
  emailVerified: boolean;
  role: UserRole;
  preferences: UserPreferences;
  stats: UserStats;
}

export type UserRole = 'user' | 'premium' | 'admin' | 'moderator';

export interface UserPreferences {
  notifications: {
    email: boolean;
    push: boolean;
    sms: boolean;
  };
  privacy: {
    profileVisible: boolean;
    statsVisible: boolean;
  };
  sports: string[];
  leagues: string[];
}

export interface UserStats {
  totalPredictions: number;
  correctPredictions: number;
  accuracy: number;
  currentStreak: number;
  longestStreak: number;
  points: number;
  rank: number;
}

export interface CreateUserRequest {
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  password: string;
}

export interface UpdateUserRequest {
  firstName?: string;
  lastName?: string;
  avatar?: string;
  preferences?: Partial<UserPreferences>;
}
