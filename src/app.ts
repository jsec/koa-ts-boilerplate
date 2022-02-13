import Koa from "koa";
import bodyParser from "koa-bodyparser";
import * as KoaRouter from "@koa/router";

const app = new Koa();
app.use(bodyParser());

const router = new KoaRouter();

/* RegisterRoutes(router);

app.use(errorMiddleware); */

app.use(router.routes()).use(router.allowedMethods());

export default app;
