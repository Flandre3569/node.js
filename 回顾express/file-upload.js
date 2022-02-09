const path = require('path')
const express = require('express')
const multer = require('multer')

const app = express();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads/')
  },
  filename: (req, file, cb) => {
    // console.log(file.originalname.toString().split('.')[0]);
    // cb(null, file.originalname.toString().split('.')[0] + path.extname(file.originalname))
    cb(null, Date.now() + path.extname(file.originalname))
  }
})

const upload = multer({
  storage
});

app.post('/login', upload.any(), (req, res, next) => {
  res.end('login successfully')
})

app.post('/upload', upload.single('file'), (req, res, next) => {
  res.end('upload successfully')
})

app.listen(3000, () => {
  console.log('服务器启动成功');
})
