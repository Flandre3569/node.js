const http = require('http');

// http发送get请求
http.get('http://localhost:8888', (res) => {
  res.on('data', (data) => {
    console.log(data.toString());
  })
})

// http发送post请求
// 但是http本身没没有post请求,所以需要别的方式
const req = http.request({
  method: 'POST',
  hostname: 'localhost',
  port: '8888'
}, (res) => {
    res.on('data', (data) => {
      console.log(data.toString());
    })
    res.on('end', () => {
      console.log(`所有响应均已请求`);
    })
})

req.end();