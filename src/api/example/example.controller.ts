import { Get, JsonController, Param, UseAfter } from 'routing-controllers';
import { Service } from 'typedi';
import { O, pipe, Result } from '@mobily/ts-belt';
import { Boom, notFound } from '@hapi/boom';
import { ResponseMiddleware } from '../../middleware/response.middleware';
import { Example } from '../../db/models/example.model';
import { ExampleService } from './example.service';

@Service()
@JsonController('/example')
@UseAfter(ResponseMiddleware)
export class ExampleController {
  constructor(private readonly service: ExampleService) {}

  @Get('/')
  public async getAll(): Promise<Result<Example[], Boom>> {
    const result = await this.service.getAll();

    return pipe(result, O.toResult(notFound('Resource not found')));
  }

  @Get('/:id')
  public async getById(@Param('id') id: number): Promise<Result<Example, Boom>> {
    const result = await this.service.getById(id);

    return pipe(result, O.toResult(notFound(`Resource with id ${id} not found`)));
  }
}
