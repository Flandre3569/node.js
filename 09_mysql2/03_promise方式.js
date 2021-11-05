const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  database: 'students',
  user: 'root',
  password: '123'
});

const statement = `SELECT * FROM stu_info`;

connection.promise().execute(statement).then(results => {
  console.log(results);
}).catch(err => {
  console.log(err);
});