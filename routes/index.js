import Router from 'koa-router';
import athletes from './athletes';

const router = new Router();

router.get('/', async (ctx, next) => {
  ctx.body = 'Hello World';
  await next();
});

router.use('/athletes', athletes.routes());

export default router;
