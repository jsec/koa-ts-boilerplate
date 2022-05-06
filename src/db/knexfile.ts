import { Knex } from 'knex';
import { knexSnakeCaseMappers } from 'objection';
import * as dotenv from 'dotenv';
import { resolve } from 'path';

dotenv.config({ path: resolve(__dirname, '../../.env') });

const config = {
  client: 'pg',
  connection: {
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME
  },
  migrations: {
    directory: 'migrations',
    stub: 'stubs/migration.stub.ts'
  },
  seeds: {
    directory: 'seeds',
    stub: 'stubs/seed.stub.ts'
  },
  ...knexSnakeCaseMappers
} as Knex.Config;

export default config;
