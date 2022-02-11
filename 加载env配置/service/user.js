const conn = require('../app/database')

class UserService {
  async register(user) {
    const { username, password } = user;
    const sql = 'INSERT INTO `users`(`name`, `password`) VALUES (?, ?);';
    const result = await conn.execute(sql, [username, password]);
    return result;
  }
}

module.exports = new UserService();