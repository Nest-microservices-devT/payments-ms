import 'dotenv/config';
import * as joi from 'joi';
import { EnvVars } from 'src/interfaces';

const envsSchema = joi
  .object({
    PORT: joi.number().required(),
    NATS_SERVERS: joi.array().items(joi.string()).required(),
    STRIPE_SECRET: joi.string().required(),
    STRIPE_SUCCESS_URL: joi.string().required(),
    STRIPE_CANCEL_URL: joi.string().required(),
    STRIPE_ENDPOINT_SECRET: joi.string().required(),
    STRIPE_ENDPOINT_SECRET_TESTING: joi.string(),
  })
  .unknown(true);

const { error, value } = envsSchema.validate({
  ...process.env,
  NATS_SERVERS: process.env.NATS_SERVERS.split(','),
});

if (error) throw new Error(`Config validation error: ${error.message}`);
const envVars: EnvVars = value;

export const envs = {
  port: envVars.PORT,
  nats_servers: envVars.NATS_SERVERS,
  stripe_secret: envVars.STRIPE_SECRET,
  stripe_success_url: envVars.STRIPE_SUCCESS_URL,
  stripe_cancel_url: envVars.STRIPE_CANCEL_URL,
  stripe_endpoint_secret: envVars.STRIPE_ENDPOINT_SECRET,
  stripe_endpoint_secret_testing: envVars.STRIPE_ENDPOINT_SECRET_TESTING,
};
