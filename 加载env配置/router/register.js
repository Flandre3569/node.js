const Router = require('@koa/router')
const { register } = require('../controller/user')

const registerRouter = new Router({
  prefix: '/register'
})

registerRouter.post('/user', register)


module.exports = registerRouter;