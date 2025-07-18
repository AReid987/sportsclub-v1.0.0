import { BaseEntity } from './common';

export interface Sport extends BaseEntity {
  name: string;
  code: string;
  category: SportCategory;
  isActive: boolean;
}

export type SportCategory = 'football' | 'basketball' | 'tennis' | 'baseball' | 'hockey' | 'soccer' | 'other';

export interface League extends BaseEntity {
  name: string;
  code: string;
  sportId: string;
  country: string;
  season: string;
  isActive: boolean;
}

export interface Team extends BaseEntity {
  name: string;
  code: string;
  leagueId: string;
  logo?: string;
  country: string;
  isActive: boolean;
}

export interface Event extends BaseEntity {
  homeTeamId: string;
  awayTeamId: string;
  leagueId: string;
  startTime: Date;
  status: EventStatus;
  result?: EventResult;
  odds: EventOdds;
}

export type EventStatus = 'scheduled' | 'live' | 'finished' | 'postponed' | 'cancelled';

export interface EventResult {
  homeScore: number;
  awayScore: number;
  winner?: 'home' | 'away' | 'draw';
  details?: Record<string, any>;
}

export interface EventOdds {
  homeWin: number;
  awayWin: number;
  draw?: number;
  overUnder?: {
    line: number;
    over: number;
    under: number;
  };
  handicap?: {
    line: number;
    home: number;
    away: number;
  };
}
