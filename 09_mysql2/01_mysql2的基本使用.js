const mysql = require('mysql2');

// 1、创建数据库链接
const connection = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  database: 'students',
  user: 'root',
  password: '123'
});

// 2、执行sql语句

const statement = `SELECT * FROM stu_info`;

connection.query(statement, (err, results, fields) => {
  console.log(results);
})

