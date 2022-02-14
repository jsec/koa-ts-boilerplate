import { notFound } from '@hapi/boom';
import { Controller, Get, Route } from 'tsoa';
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

    if (!result) {
      throw notFound();
    }

    return result;
  }
}
