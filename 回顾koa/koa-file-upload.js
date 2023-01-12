const path = require('path')
const Koa = require('koa')
const Router = require('koa-router')
const multer = require('@koa/multer')

const app = new Koa()
const uploadRouter = new Router({ prefix: '/upload' })

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads/')
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname))
  }
})

const upload = multer({
  storage
})

uploadRouter.post('/avatar', upload.single('file'), (ctx, next) => {
  console.log(ctx.request.file);
  ctx.response.body = '上传成功';
})

app.use(uploadRouter.routes())
app.use(uploadRouter.allowedMethods())

app.listen(3000);