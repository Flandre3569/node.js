const fs = require('fs');

// 传统的方式写入文件
// fs.writeFile('./bar.txt', 'hello world', (err) => {
//   if (err) {
//     console.log(err);
//   }
// })

// 通过流的方式进行写入
const writer = fs.createWriteStream('./bar.txt', {
  flags: 'r+',
  start: 4
});

writer.write('你好啊,mx', (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`写入文件成功`);
})

// 关闭文件
// writer.close();
writer.end();

writer.on('close', () => {
  console.log(`文件被关闭`);
})
