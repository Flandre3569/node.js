const express = require('express');

const USERNAME_DOES_NOT_EXIST = `username does not exist`;
const USERNAME_HAS_ALREADY_EXISTED = `username has already existed`;

const app = express();
app.post('/login', (req, res, next) => {
    // 假如在数据中查询用户名时，发现不存在
  const isLogin = false;
  if (isLogin) {
    res.json(`user login success`);
  } else {
    // res.type(400);
    // res.json(`username does not exist`);
    next(new Error(USERNAME_DOES_NOT_EXIST));
  }
})

app.post('/register', (req, res, next) => {
  // 假如在数据中查询用户名时，发现不存在
const isLogin = true;
if (isLogin) {
  res.json(`user register success`);
} else {
  // res.type(400);
  // res.json(`username has already existed`);
  next(new Error(USERNAME_HAS_ALREADY_EXISTED));
}
})

app.use((err, req, res, next) => {
  let message = '';
  let status = 400;
  switch (err.message) {
    case USERNAME_DOES_NOT_EXIST:
      message = 'username does not exist';
      break;
    case USERNAME_HAS_ALREADY_EXISTED:
      message = `username has already existed`;
      break;
    default:
      status = 404;
      message = 'not found';
  }
  res.status(status);
  res.json({
    errCode: status,
    errMessage: message
  })
})

app.listen(8000, () => {
  console.log(`服务器开启成功`);
})