const fs = require('fs');

// 本质上读到的东西都是二进制的东西，可以设置编码，然后转为相应的内容
fs.readFile('./abc.txt',{encoding: 'utf16le'}, (err, data) => {
  console.log(data);
})

fs.readFile('./abc.txt', (err, data) => {
  console.log(data.toString());
})

fs.readFile('./abc.txt',{encoding: 'utf8'}, (err, data) => {
  console.log(data);
})

fs.readFile('./abc.txt', (err, data) => {
  console.log(data);
})