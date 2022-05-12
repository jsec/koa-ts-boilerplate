import { Boom } from '@hapi/boom';
import { pipe, R } from '@mobily/ts-belt';
import { KoaMiddlewareInterface } from 'routing-controllers';
import { Service } from 'typedi';

@Service()
export class ResponseMiddleware implements KoaMiddlewareInterface {
  async use(context: any, next: (err?: any) => Promise<any>): Promise<any> {
    pipe(
      context.response.body,
      R.match(
        res => {
          context.response.body = res;
        },
        errorRes => {
          const error = errorRes as Boom;
          context.response.status = error.output.statusCode;
          context.response.message = error.output.payload.error;
          context.response.body = error.output.payload.message;
        }
      )
    );

    await next();
  }
}
