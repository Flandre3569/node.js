const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('students', 'root', '123', {
  host: 'localhost',
  dialect: 'mysql'
});

sequelize.authenticate().then(() => {
  console.log(`连接成功`);
}).catch(err => {
  console.log(`连接失败`);
})