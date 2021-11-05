const fs = require('fs');
// 读取一个文件的所有内容，写入另一个文件中

// 传统的写法
// fs.readFile('./abc.txt', { encoding: 'utf-8' }, (err, data) => {
//   fs.writeFile('./aaa.txt', data, err => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     console.log(`文件内容转移成功`);
//   })
// })

// 流的写法
const writer = fs.createWriteStream('./baz.txt');
const reader = fs.createReadStream('./bar.txt');

reader.pipe(writer);

writer.close();