const Koa = require('koa');

const app = new Koa();
// use注册中间件  只能通过use进行注册
app.use((ctx, next) => {
  // ctx.response.body = 'hello Koa';
  if (ctx.request.url === '/login') {
    if (ctx.request.method === 'GET') {
      console.log(`来到了这里`);
      ctx.response.body = 'login success';
    }
  } else {
    ctx.response.body = 'other request';
  }
})

// 没有提供以下的注册方式
// methods方式：
// app.get()  / post 
// post 方式 
// 连续注册的方式 app.use((ctx,next) => {},(ctx,next) => {});


app.listen(8000, () => {
  console.log(`注册中间件服务已开启`);
})