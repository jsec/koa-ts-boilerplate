import { notFound } from '@hapi/boom';
import { Maybe, NonEmptyList } from 'purify-ts';
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
  public async getAll(): Promise<Maybe<NonEmptyList<Example>>> {
    const result = await this.service.getAll();

    if (result.isNothing()) throw notFound();

    return result;
  }

  @Get('{id}')
  public async getById(@Path() id: number): Promise<Maybe<Example>> {
    const result = await this.service.getById(id);

    if (!result) {
      throw notFound();
    }

    return result;
  }
}
