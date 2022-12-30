import path from 'node:path';

import Koa from 'koa';
import serve from 'koa-static';

const app = new Koa();

app.use(serve(path.resolve()));

app.listen(3000, () =>
  console.log('Koa is listening to http://localhost:3000'),
);

export default app;
