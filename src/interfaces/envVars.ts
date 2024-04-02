export interface EnvVars {
  PORT: number;
  NATS_SERVERS: string;
  STRIPE_SECRET: string;
  STRIPE_SUCCESS_URL: string;
  STRIPE_CANCEL_URL: string;
  STRIPE_ENDPOINT_SECRET: string;
  STRIPE_ENDPOINT_SECRET_TESTING: string;
}
