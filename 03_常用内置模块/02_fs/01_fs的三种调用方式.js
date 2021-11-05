const fs = require('fs');

// 读取文件
const filepath = "./hello.txt";
// 方式一：同步操作(会产生阻塞)
// const info = fs.statSync(filepath);
// console.log(info);
// console.log("后续需要执行的代码");

// 方式二：异步操作(不会产生阻塞，但是容易产生回调地狱)
// fs.stat(filepath, (err, info) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(info);
// })
// console.log("后续需要执行的代码");

// 方式三：promise(不会产生阻塞，不会产生回调地狱)
fs.promises.stat(filepath).then(info => {
  console.log(info);
}).catch(err => {
  console.log(err);
})
console.log("后续需要执行的代码");



