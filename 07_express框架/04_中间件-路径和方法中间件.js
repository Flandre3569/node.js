const express = require('express');

const app = express();

// 路径和方法匹配中间件
app.get('/login', (req, res, next) => {
  console.log(`hello world`);
  res.end('hello middle methods 01');
  next();
})

app.post('/login', (req, res, next) => {
  console.log(`hello 路径方法匹配中间件`);
  res.end('hello middleware');
})

app.listen('8000', () => {
  console.log(`hello world`);
});