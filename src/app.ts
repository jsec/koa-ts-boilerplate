import 'reflect-metadata';
import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import Router from '@koa/router';
import { RegisterRoutes } from '../build/routes';

const app = new Koa();
app.use(bodyParser());

const router = new Router();
RegisterRoutes(router);

app.use(router.routes()).use(router.allowedMethods());

export default app;
