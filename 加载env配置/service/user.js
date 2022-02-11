const connection = require('mysql2');

class UserService {
  async register(user) {
    console.log(`用户数据已存储到数据库:${user}`);
    return '用户注册成功';
  }
}

module.exports = new UserService();