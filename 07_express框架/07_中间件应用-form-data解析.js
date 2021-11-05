const express = require('express');
const multer = require('multer');

const app = express();
// app.use(express.urlencoded());
// app.use(express.json());

// 下面的multer才是用来解析form-data的库
const upload = multer();
// upload不能全局解析，只能放入单个请求中使用
app.post('/product', upload.any(),(req, res, next) => {
  console.log(req.body);
  res.end('hello world');
})

app.listen(8000, () => {
  console.log(`form-data解析服务器开启成功`);
})