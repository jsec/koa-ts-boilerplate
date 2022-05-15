import consola from 'consola';
import Router from '@koa/router';
import { isHttpError } from 'http-errors';
import { Context, Next } from 'koa';

export const responseHandler: Router.Middleware = async (ctx: Context, next: Next) => {
  await next();
  if (isHttpError(ctx.response.body)) {
    const error = ctx.response.body;
    consola.warn(error);
    ctx.response.status = error.status;
    ctx.response.message = error.name;
    ctx.response.body = error.message;
  }
};
