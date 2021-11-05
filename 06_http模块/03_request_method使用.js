const { readFile } = require('fs');
const http = require('http');
const url = require('url');


// 使用http和对POST请求body中的数据进行读取
const server = http.createServer((req, res) => {
  const { pathname } = url.parse(req.url);
  console.log(pathname);
  if (pathname === '/login') {
    if (req.method === 'POST') {
      req.setEncoding('utf-8');
      req.on('data', (data) => {
        // 解析body中的data数据
        const { username, password } = JSON.parse(data);
        console.log(username);
        console.log(password);
        // 进行一个假验证登录
        if (username === 'ming' && password === '123') {
          console.log('登录成功');
          res.end('登录成功');
        }
      })
    }
  }
})

server.listen(8888, () => {
  console.log(`服务器启动成功`);
})