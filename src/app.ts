import 'reflect-metadata';
import logger from 'koa-logger';
import helmet from 'koa-helmet';
import { useContainer, useKoaServer } from 'routing-controllers';
import cors from '@koa/cors';
import Container from 'typedi';
import Koa from 'koa';
import { errorHandler } from './middleware/error.middleware';
import { ExampleController } from './api/example/example.controller';

useContainer(Container);

const koa = new Koa();

koa.use(logger());
koa.use(helmet());
koa.use(cors());
koa.use(errorHandler);

const app = useKoaServer(koa, {
  routePrefix: '/api',
  controllers: [ExampleController]
});

export default app;
