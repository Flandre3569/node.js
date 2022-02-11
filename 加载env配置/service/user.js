const conn = require('../app/database')

class UserService {
  async register(user) {
    const { username, password } = user;
    const sql = 'INSERT INTO `users`(`name`, `password`) VALUES (?, ?);';
    const result = await conn.execute(sql, [username, password]);
    return result;
  }
  
  async queryByName(user) {
    const { username, password } = user;
    const sql = 'SELECT * FROM users WHERE `name` = ?;';
    const result = await conn.execute(sql, [username])
    return result[0];
  }
}

module.exports = new UserService();