export const APP_NAME = 'Sportsclub';
export const APP_VERSION = '1.0.0';
export const APP_DESCRIPTION = 'Sports Prediction & Betting Platform';

export const DEFAULT_PAGE_SIZE = 20;
export const MAX_PAGE_SIZE = 100;

export const CACHE_TTL = {
  SHORT: 5 * 60, // 5 minutes
  MEDIUM: 30 * 60, // 30 minutes
  LONG: 60 * 60, // 1 hour
  VERY_LONG: 24 * 60 * 60, // 24 hours
} as const;
