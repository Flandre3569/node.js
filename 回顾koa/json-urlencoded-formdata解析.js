const Koa = require('koa');
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const multer = require('@koa/multer')

const app = new Koa();
const router = new Router()
app.use(bodyParser())
const upload = multer();

router.post('/login', (ctx, next) => {
  console.log(ctx.request.url);
  console.log(ctx.request.body);
  console.log(ctx.request.query);
})

router.get('/user/:id', (ctx, next) => {
  console.log(ctx.request.params);
})

router.get('/product', upload.any(), (ctx, next) => {
  console.log(ctx.request.body);
})

// app.use((ctx, next) => {
//   ctx.response.body = '各类传递的数据解析'
//   next();
// })

app.use(router.routes())
app.use(router.allowedMethods())

app.listen(3000, () => {
  console.log('服务器已启动');
})