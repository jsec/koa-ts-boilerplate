import { Model } from "objection";
import db from "../db";

Model.knex(db);

export class Example extends Model {
  static tableName = "example";

  id!: number;
  value!: string;
}
