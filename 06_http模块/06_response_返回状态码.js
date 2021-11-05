const http = require('http');

const server = http.createServer((req, res) => {
  // 设置返回状态码 方式一:直接给属性赋值
  // res.statusCode = 400;

  // 设置返回状态码 方式二:和head一起设置
  res.writeHead(503);
  
  res.write('hello response');
  res.end();
})

server.listen(8888, () => {
  console.log(`服务器已开启`);
})