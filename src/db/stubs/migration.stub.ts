import { Knex } from 'knex';

const tableName = '';

export async function up(knex: Knex) {
  return knex.schema.createTable(tableName, t => {
    t.increments();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable(tableName);
}
