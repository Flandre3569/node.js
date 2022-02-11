const Router = require('@koa/router')
const { register } = require('../controller/user')
const { userVerify } = require('../middleware/verify');

const registerRouter = new Router({
  prefix: '/register'
})

registerRouter.post('/user', userVerify, register)


module.exports = registerRouter;