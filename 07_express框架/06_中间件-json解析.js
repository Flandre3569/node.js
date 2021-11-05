const express = require('express');

const app = express();
// 取到服务器发送的json数据
// 原生方法
// app.use((req, res, next) => {
//   if (req.headers["content-type"] === 'application/json') {
//     req.on('data', (data) => {
//         // console.log(data.toString());
//         const info = JSON.parse(data.toString());
//         req.body = info;
//       })
//     req.on('end', () => {
//       next();
//     })
//   } else {
//     next();
//   }
// })

// 新版本的express已经把json和urlencoded设置为内置函数
app.use(express.json());  //这行代码iu相当于上面的那一些代码  

// 在使用urlencoded的时候，如果设定extended为true   那么使用的是第三方库qs进行解析
// 如果设定extended为false，那么使用的是node内部模块querystring进行解析
app.use(express.urlencoded({ extended: true }));

app.get('/login', (req, res, next) => {
  console.log(req.body);
  res.end('MxXuan, welcome back');
})

app.listen('8000', () => {
  console.log(`服务器启动成功`);
})