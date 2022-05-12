import { A, D, O, Option } from '@mobily/ts-belt';
import { Service } from 'typedi';
import { Example } from '../../db/models/example.model';

@Service()
export class ExampleService {
  public async getAll(): Promise<Option<Example[]>> {
    const result = await Example.query();
    return O.fromPredicate(result, A.isNotEmpty);
  }

  public async getById(id: number): Promise<Option<Example>> {
    const result = await Example.query().where('id', id).first();
    return O.fromPredicate(result, D.isNotEmpty);
  }
}
