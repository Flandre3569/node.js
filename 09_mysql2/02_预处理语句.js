const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  database: 'students',
  user: 'root',
  password: '123'
});

const statement = `SELECT * FROM stu_info`;

connection.execute(statement, (err, results) => {
  console.log(results);
})