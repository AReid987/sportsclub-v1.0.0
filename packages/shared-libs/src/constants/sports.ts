export const SPORT_CATEGORIES = {
  FOOTBALL: 'football',
  BASKETBALL: 'basketball',
  TENNIS: 'tennis',
  BASEBALL: 'baseball',
  HOCKEY: 'hockey',
  SOCCER: 'soccer',
  OTHER: 'other',
} as const;

export const PREDICTION_TYPES = {
  MATCH_WINNER: 'match_winner',
  OVER_UNDER: 'over_under',
  HANDICAP: 'handicap',
  BOTH_TEAMS_SCORE: 'both_teams_score',
  CORRECT_SCORE: 'correct_score',
  FIRST_GOAL_SCORER: 'first_goal_scorer',
} as const;

export const EVENT_STATUSES = {
  SCHEDULED: 'scheduled',
  LIVE: 'live',
  FINISHED: 'finished',
  POSTPONED: 'postponed',
  CANCELLED: 'cancelled',
} as const;
