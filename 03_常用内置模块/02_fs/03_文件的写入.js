const fs = require('fs');

const content = "hello MxXuan";

// 将原文件进行覆盖
// fs.writeFile('./hello.txt', content, err => {
//   console.log(err);
// });

// 将content写到文件最后
// fs.writeFile('./hello.txt', content, { flag: 'a' }, err => {
//   console.log(err);
// });

// 读取文件，并设定编码为UTF-8
fs.readFile('./hello.txt', { encoding: 'UTF-8' }, (err, data) => {
  console.log(data);
});

