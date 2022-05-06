import { Maybe, NonEmptyList } from 'purify-ts';
import { Example } from '../../db/models/example.model';

export class ExampleService {
  public async getAll(): Promise<Maybe<NonEmptyList<Example>>> {
    const result = await Example.query();
    return NonEmptyList.fromArray(result);
  }

  public async getById(id: number): Promise<Maybe<Example>> {
    const result = await Example.query().where('id', id).first();
    return Maybe.fromNullable(result);
  }
}
