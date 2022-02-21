import consola from 'consola';
import { StatusCodes } from 'http-status-codes';
import { isBoom } from '@hapi/boom';
import Router from '@koa/router';
import { Context, Next } from 'koa';

const setErrorResponse = (ctx: Context, statusCode: number, message: string) => {
  ctx.status = statusCode;
  ctx.body = {
    message,
    correlationId: ctx.state.correlationId
  };
};

export const errorHandler: Router.Middleware = async (ctx: Context, next: Next) => {
  try {
    await next();
  } catch (err) {
    consola.error(err);
    if (isBoom(err)) {
      setErrorResponse(ctx, err.output.statusCode, err.message);
    } else {
      setErrorResponse(ctx, StatusCodes.INTERNAL_SERVER_ERROR, (err as Error).message);
    }
  }
};
