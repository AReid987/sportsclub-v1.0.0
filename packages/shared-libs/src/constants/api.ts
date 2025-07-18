export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    REFRESH: '/auth/refresh',
    LOGOUT: '/auth/logout',
    RESET_PASSWORD: '/auth/reset-password',
    VERIFY_EMAIL: '/auth/verify-email',
  },
  USERS: {
    PROFILE: '/users/profile',
    UPDATE_PROFILE: '/users/profile',
    STATS: '/users/stats',
    PREFERENCES: '/users/preferences',
  },
  PREDICTIONS: {
    LIST: '/predictions',
    CREATE: '/predictions',
    GET: '/predictions/:id',
    UPDATE: '/predictions/:id',
    DELETE: '/predictions/:id',
    STATS: '/predictions/stats',
  },
  SPORTS: {
    LIST: '/sports',
    GET: '/sports/:id',
    LEAGUES: '/sports/:id/leagues',
  },
  EVENTS: {
    LIST: '/events',
    GET: '/events/:id',
    UPCOMING: '/events/upcoming',
    LIVE: '/events/live',
  },
} as const;

export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  UNPROCESSABLE_ENTITY: 422,
  INTERNAL_SERVER_ERROR: 500,
} as const;
