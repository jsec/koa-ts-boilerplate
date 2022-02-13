import { Knex } from "knex";

const tableName = "example";

export async function up(knex: Knex) {
  return knex.schema.createTable(tableName, (t) => {
    t.integer("id").notNullable().primary();
    t.string("value").nullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable(tableName);
}
