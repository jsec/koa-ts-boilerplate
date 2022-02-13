import { Knex } from "knex";

export async function seed(knex: Knex): Promise<any> {
  await knex("example").delete();

  const example = {
    id: 1,
    value: "value",
  };

  await knex("example").insert(example);
}
