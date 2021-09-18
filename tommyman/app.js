import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import cors from '@koa/cors';
import serve from 'koa-static';
import path from 'path';

const __dirname = import.meta.url.slice(7, import.meta.url.lastIndexOf('/'));

const app = new Koa();

app
  .use(
    cors({
      origin: '*',
      methods: 'GET, POST',
      allowedHeaders: '*',
      exposedHeaders: '*',
    }),
  )
  .use(bodyParser())
  .use(serve(path.join(__dirname, '/client/public')));
// .use(submitRouter.routes())
// .use(submitRouter.allowedMethods());

app.listen(3003, () =>
  console.log(`Koa is listening to http://localhost:3003`),
);

export default app;
