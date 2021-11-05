// 使用express的一般套路
const express = require('express');

const app = express();

// 编写最普通的中间件
// 使用use注册一个中间件
app.use((req, res, next) => {
  console.log(`注册了第01个普通的中间件`);
  next();
});
app.use((req, res, next) => {
  console.log(`注册了第02个普通的中间件`);
  next();
});
app.use((req, res, next) => {
  console.log(`注册了第03个普通的中间件`);
  res.end(`hello world`);
});


app.listen('8000', () => {
  console.log(`普通中间件启动成功`);
});