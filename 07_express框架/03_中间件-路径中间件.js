const express = require('express');

const app = express();

app.use('/login', (req, res, next) => {
  console.log(`home middleware`);
  res.end(`home middleware`);
})

app.listen('8000', () => {
  console.log(`路径体验--路径匹配中间件`);
})