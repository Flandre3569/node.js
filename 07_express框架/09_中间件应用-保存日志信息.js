const express = require('express');
const morgan = require('morgan');
const fs = require('fs');

const app = express();
const writerStream = fs.createWriteStream('./logs/access.log', {
  flags: 'a+'
});
// 全部日志都进行保存
app.use(morgan("combined", { stream: writerStream }));

app.get('/home', (req, res, next) => {
  res.end('hello world');
})

app.listen(8000, (req, res, next) => {
  console.log(`日志保存服务器启动成功`);
})