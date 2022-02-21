import 'reflect-metadata';
import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import logger from 'koa-logger';
import Router from '@koa/router';
import cors from '@koa/cors';
import helmet from 'koa-helmet';
import { RegisterRoutes } from '../build/routes';
import { errorHandler } from './middleware/error.middleware';

const app = new Koa();
app.use(logger());
app.use(cors());
app.use(helmet());
app.use(bodyParser());
app.use(errorHandler);

const router = new Router();
RegisterRoutes(router);

app.use(router.routes()).use(router.allowedMethods());

export default app;
