import { notFound } from '@hapi/boom';
import { Controller, Get, Path, Route } from 'tsoa';
import { autoInjectable } from 'tsyringe';
import { Example } from '../../db/models/example.model';
import { ExampleService } from './example.service';

@autoInjectable()
@Route('example')
export class ExampleController extends Controller {
  constructor(private readonly service: ExampleService) {
    super();
  }

  @Get()
  public async getAll(): Promise<Example[]> {
    const result = await this.service.getAll();

    if (!result?.length) {
      throw notFound();
    }

    return result;
  }

  @Get('{id}')
  public async getById(@Path() id: number): Promise<Example> {
    const result = await this.service.getById(id);

    if (!result) {
      throw notFound();
    }

    return result;
  }
}
