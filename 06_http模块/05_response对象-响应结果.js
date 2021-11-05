const http = require('http');

const server = http.createServer((req, res) => {
  res.write('hello response');
  res.end('响应结果');
})

server.listen(8888, () => {
  console.log(`服务器已开启`);
})

