import Koa from 'koa';
import logger from 'koa-logger';
import bodyParser from 'koa-bodyparser';
import db from './db';
import config from './config';
import router from './routes';

db.on('error', console.error.bind(console, 'connection error:'));

const app = new Koa();

app
  .use(logger())
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(config.port, () => {
  console.log(`Server running at http://${config.hostname}:${config.port}/`);
});
