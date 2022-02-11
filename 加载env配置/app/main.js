const Koa = require('koa')
const registerRouter = require('../router/register')
const bodyParser = require('koa-bodyparser')

const app = new Koa()
app.use(bodyParser())
app.use(registerRouter.routes())
app.use(registerRouter.allowedMethods())


module.exports = app;