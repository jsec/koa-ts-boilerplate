import { KoaMiddlewareInterface } from 'routing-controllers';
import { Service } from 'typedi';

@Service()
export class ResponseMiddleware implements KoaMiddlewareInterface {
  async use(context: any, next: (err?: any) => Promise<any>): Promise<any> {
    console.log('do something before execution');
    console.log(context.response);
    await next();
    console.log('do something after execution');
  }
}
