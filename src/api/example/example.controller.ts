/* import { notFound } from '@hapi/boom';
import { Maybe } from 'purify-ts'; */
import { Get, JsonController, Param, UseAfter } from 'routing-controllers';
import { Service } from 'typedi';
// import { Maybe } from 'purify-ts';
import { ResponseMiddleware } from '../../middleware/response.middleware';
import { Example } from '../../db/models/example.model';
import { ExampleService } from './example.service';

@Service()
@JsonController('/example')
@UseAfter(ResponseMiddleware)
export class ExampleController {
  constructor(private readonly service: ExampleService) {}

  @Get('/')
  public async getAll(): Promise<Example[]> {
    const result = await this.service.getAll();
    console.log(result);

    return [{ id: 3, value: '3' } as Example, { id: 5, value: '4234' } as Example];
  }

  @Get('/:id')
  public async getById(@Param('id') id: number): Promise<Example> {
    const result = await this.service.getById(id);

    console.log(result.extract());
    console.log(result.extract() as Example);

    return result.extract() as Example;
  }
}
