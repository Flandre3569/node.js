const http = require('http');
const url = require('url');
const qs = require('querystring');

const server = http.createServer((req, res) => {
  // if (req.url === '/login') {
  //   console.log(req.url);
  //   res.end('欢迎登陆');
  // } else if (req.url === '/home') {
  //   res.end('登录成功')
  // } else {
  //   res.end('请求错误')
  // }


  // 此时请求会将/后面所有信息请求过来
  // console.log(req.url);
  // 如果想请求username和password

  // 这种方式只能取到username=???和password=???，如果想取到具体值，还需要进行字符串切割
  const { query, pathname } = url.parse(req.url);
  // console.log(query);
  // console.log(pathname);

  // 使用querystring则可以正确取到  value
  const { username, password } = qs.parse(query);
  console.log(username);
  console.log(password);
  console.log(qs.parse(query));
  res.end('hello user');
})
server.listen(8888, () => {
  console.log(`服务器开启成功`);
})