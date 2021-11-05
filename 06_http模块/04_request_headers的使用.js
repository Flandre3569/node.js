const http = require('http');

// 创建http
const server = http.createServer((req, res) => {
  // 打印headers的属性
  console.log(req.headers);
  res.end('hello');
})

// 启动服务器，并设定端口号和主机
server.listen(8888, '0.0.0.0', () => {
  console.log(`服务器1已开启`);
})