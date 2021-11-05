const express = require('express');

// expree其实是一个函数--createApplication
// 当我们调用这个函数的时候，会返回一个app
const app = express();

// 解决跨域
// app.all('*', function (req, res, next) {    // 解决跨域问题
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
//   res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");    
//   if (req.method == "GET") {
//       res.send(200);       
//   } else {
//       next();
//   }
// });

// 监听默认路径
app.get('/', (req, res, next) => {
  res.end('hello express');
})

app.post('/', (req, res, next) => {
  res.end('hello post');
})

// 开启监听
app.listen(8000, () => {
  console.log(`express初体验启动成功`);
})
