import consola from 'consola';
import { StatusCodes } from 'http-status-codes';
import Router from '@koa/router';
import { Context, Next } from 'koa';

export const errorHandler: Router.Middleware = async (ctx: Context, next: Next) => {
  try {
    await next();
  } catch (err: unknown) {
    consola.error(err);
    ctx.status = StatusCodes.INTERNAL_SERVER_ERROR;
    ctx.body = (err as Error).message;
  }
};
