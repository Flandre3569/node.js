const Router = require('koa-router');
const router = new Router({
  prefix: "/users"
});

router.get('/', (ctx, next) => {
  ctx.response.body = 'User Lists';
});

router.put('/', (ctx, next) => {
  ctx.response.body = 'User request';
});

module.exports = router;