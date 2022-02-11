const Koa = require('koa')
const registerRouter = require('../router/register')
const bodyParser = require('koa-bodyparser')
const { errorHandler } = require('../errors/error')

const app = new Koa()

app.use(bodyParser())
app.use(registerRouter.routes())
app.use(registerRouter.allowedMethods())
app.on('error', errorHandler)

module.exports = app;