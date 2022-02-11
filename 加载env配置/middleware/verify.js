const errorTypes = require('../errors/error-types');
const service = require('../service/user');

const userVerify = async (ctx, next) => {
  const { username, password } = ctx.request.body;

  if (!username || !password) {
    const error = new Error(errorTypes.NO_USER_OR_PASSWORD)
    return ctx.app.emit('error', error, ctx)
  }

  const result = await service.queryByName({ username,password });
  if (result.length) {
    const error = new Error(errorTypes.ALREADY_HAVE_USER);
    return ctx.app.emit('error', error, ctx);
  }
  
  await next();
}

module.exports = { userVerify };