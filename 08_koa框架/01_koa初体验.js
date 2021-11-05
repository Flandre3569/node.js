const Koa = require('koa');

const app = new Koa();
app.use((ctx, dispatch) => {
  console.log(`中间件被执行`);
  // 执行返回结果，如果没有返回结果的话，会显示一个not found
  ctx.response.body = 'hello world';
})

app.listen(8000, () => {
  console.log(`koa初体验服务器启动成功`);
})