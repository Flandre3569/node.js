const errors = require('../errors/error-types');

const errorHandler = (err, ctx) => {
  let status, message;
  switch (err.message) {
    case errors.NO_USER_OR_PASSWORD:
      status = 404;
      message = '请输入用户名和密码';
      break;
    default:
      status = 404;
      message = 'NOT FOUND';
  }

  ctx.response.body = message;
  ctx.response.status = status;
}

module.exports = { errorHandler };