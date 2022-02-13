import { knex, Knex } from 'knex';
import config from './knexfile';

const conn = config as Knex.Config;
const db = knex(conn);

export default db;
