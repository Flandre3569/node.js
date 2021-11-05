const Koa = require('koa');
const userRouter = require('./routers/user');

const app = new Koa();
app.use(userRouter.routes());
app.use(userRouter.allowedMethods());


app.listen(8000, () => {
  console.log(`路由服务器启动成功`);
})