const express = require('express')
const userRouter = require('./routes/users');

const app = express();
app.use('/users', userRouter);

app.listen(3000, () => {
  console.log('服务器启动成功');
})