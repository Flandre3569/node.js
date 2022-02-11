const errorTypes = require('../errors/error-types');

const userVerify = async (ctx, next) => {
  const { username, password } = ctx.request.body;

  if (!username || !password) {
    const error = new Error(errorTypes.NO_USER_OR_PASSWORD)
    return ctx.app.emit('error', error, ctx)
  }

  await next();
}

module.exports = { userVerify };