const fs = require('fs')

const express = require('express')
const margon = require('morgan')

const app = express();

const logWrite = fs.createWriteStream('./log/access.log', {
  flags: "a+"
})

app.use(margon('combined', {stream: logWrite}))
app.post('/login', (req, res, next) => {
  res.end('登录成功');
})

app.listen(3000, () => {
  console.log('服务器启动成功');
})