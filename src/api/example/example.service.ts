import { Option } from '../../core/types';
import { Example } from '../../db/models/example.model';

export class ExampleService {
  public async getAll(): Promise<Option<Example[]>> {
    return Example.query();
  }

  public async getById(id: number): Promise<Option<Example>> {
    return Example.query().where('id', id).first();
  }
}
