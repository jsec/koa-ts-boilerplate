import createHttpError from 'http-errors';
import { StatusCodes } from 'http-status-codes';
import { Controller, Get, Path, Route } from 'tsoa';
import { autoInjectable } from 'tsyringe';
import { ApiResponse } from '../../core/entities/types/api-response.type';
import { IExample } from './dto/example.interface';
import { ExampleService } from './example.service';

@autoInjectable()
@Route('example')
export class ExampleController extends Controller {
  constructor(private readonly service: ExampleService) {
    super();
  }

  @Get()
  public async getAll(): Promise<ApiResponse<IExample[]>> {
    const result = await this.service.getAll();

    const response = result.caseOf<ApiResponse<IExample[]>>({
      Just: value => value,
      Nothing: () => createHttpError(StatusCodes.NOT_FOUND, 'Resource could not be found')
    });

    return response;
  }

  @Get('{id}')
  public async getById(@Path() id: number): Promise<ApiResponse<IExample>> {
    const result = await this.service.getById(id);

    const response = result.caseOf<ApiResponse<IExample>>({
      Just: value => value,
      Nothing: () => createHttpError(StatusCodes.NOT_FOUND, 'Resource could not be found')
    });

    return response;
  }
}
