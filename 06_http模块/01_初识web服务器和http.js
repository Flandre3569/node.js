const http = require('http');

// 创建http
const server = http.createServer((req, res) => {
  res.end('server1');
})

// 启动服务器，并设定端口号和主机
server.listen(8000, '0.0.0.0', () => {
  console.log(`服务器1已开启`);
})

// 第二种开启服务器的方式
const server2 = new http.Server((req, res) => {
  res.end(`server2`);
})

server2.listen(8001, '0.0.0.0', () => {
  console.log(`服务器2已开启`);
})
