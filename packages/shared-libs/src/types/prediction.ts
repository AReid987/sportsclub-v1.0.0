import { BaseEntity } from './common';

export interface Prediction extends BaseEntity {
  userId: string;
  eventId: string;
  type: PredictionType;
  selection: string;
  confidence: number;
  odds: number;
  status: PredictionStatus;
  result?: PredictionResult;
  points?: number;
}

export type PredictionType = 
  | 'match_winner' 
  | 'over_under' 
  | 'handicap' 
  | 'both_teams_score'
  | 'correct_score'
  | 'first_goal_scorer';

export type PredictionStatus = 'pending' | 'won' | 'lost' | 'void' | 'cancelled';

export type PredictionResult = 'correct' | 'incorrect' | 'void';

export interface CreatePredictionRequest {
  eventId: string;
  type: PredictionType;
  selection: string;
  confidence: number;
  odds: number;
}

export interface PredictionStats {
  total: number;
  won: number;
  lost: number;
  pending: number;
  accuracy: number;
  totalPoints: number;
}
