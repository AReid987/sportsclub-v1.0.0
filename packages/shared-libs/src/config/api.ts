export interface ApiConfig {
  baseUrl: string;
  timeout: number;
  retries: number;
}

export const createApiConfig = (baseUrl: string): ApiConfig => ({
  baseUrl,
  timeout: 10000, // 10 seconds
  retries: 3,
});

export const API_CONFIGS = {
  auth: createApiConfig(process.env.AUTH_SERVICE_URL || 'http://localhost:8001'),
  prediction: createApiConfig(process.env.PREDICTION_SERVICE_URL || 'http://localhost:8002'),
  dataIngestion: createApiConfig(process.env.DATA_INGESTION_SERVICE_URL || 'http://localhost:8003'),
  aiAssistant: createApiConfig(process.env.AI_ASSISTANT_SERVICE_URL || 'http://localhost:8004'),
} as const;
