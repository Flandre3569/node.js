const service = require('../service/user');

class UserController {
  async register(ctx, next) {
    // 取数据
    const user = ctx.request.body;
    // 传入service中对数据库进行操作
    const result = await service.register(user);
    // 返回数据
    ctx.response.body = result;
  }
}

module.exports = new UserController();