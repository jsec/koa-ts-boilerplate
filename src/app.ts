import 'reflect-metadata';
import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import logger from 'koa-logger';
import Router from '@koa/router';
import cors from '@koa/cors';
import helmet from 'koa-helmet';
import { koaSwagger } from 'koa2-swagger-ui';
import { RegisterRoutes } from '../build/routes';
import { errorHandler } from './middleware/error.middleware';
import { responseHandler } from './middleware/response.middleware';

const app = new Koa();
app.use(logger());
app.use(cors());
app.use(
  helmet({
    contentSecurityPolicy: process.env.NODE_ENV !== 'development'
  })
);
app.use(bodyParser());
app.use(errorHandler);
app.use(responseHandler);

const router = new Router();
RegisterRoutes(router);

app.use(router.routes()).use(router.allowedMethods());

if (process.env.NODE_ENV === 'development') {
  import('../build/swagger.json').then(spec => {
    app.use(koaSwagger({ swaggerOptions: { spec } }));
  });
}

export default app;
