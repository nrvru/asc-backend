const Koa = require('koa');
const app = new Koa();

const port = 8000;
const hostname = '127.0.0.1';

app.use(async (ctx, next) => {
  ctx.body = 'Hello World';
  await next();
});

app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
});

module.exports = app;
