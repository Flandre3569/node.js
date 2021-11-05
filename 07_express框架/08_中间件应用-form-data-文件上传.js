const path = require('path');
const express = require('express');
const multer = require('multer');

const app = express();
// 给上传的文件添加后缀名，实现解构
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
})
const upload = multer({
  storage
});

app.post('/login', upload.any(), (req, res, next) => {
  console.log(req.body);
})
// 文件上传的处理接口
app.post('/upload', upload.single('file'), (req, res, next) => {
  res.end('文件上传成功');
})

app.listen(8000, () => {
  console.log(`文件上传服务器开启成功`);
})