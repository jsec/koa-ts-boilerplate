import { Boom, notFound } from '@hapi/boom';
import { Either, NonEmptyList } from 'purify-ts';
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
  public async getAll(): Promise<Either<Boom, NonEmptyList<Example>>> {
    const result = await this.service.getAll();

    return result.toEither(notFound('Resource not found'));
  }

  @Get('{id}')
  public async getById(@Path() id: number): Promise<Either<Boom, Example>> {
    const result = await this.service.getById(id);

    return result.toEither(notFound('Resource not found'));
  }
}
