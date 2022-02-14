import { Example } from '../../db/models/example.model';

export class ExampleService {
  public async getAll(): Promise<Example[] | undefined> {
    return Example.query();
  }
}
