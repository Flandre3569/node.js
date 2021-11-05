// 使用readable的方式读取文件中的信息
// 使用流的方式进行读取可以很精准的进行读取
const fs = require('fs');

// 创建可读流
const reader = fs.createReadStream('./abc.txt', {
  start: 3,
  end: 10,
  highWaterMark: 2
});

// 数据读取的过程
// reader.on("data", (data) => {
//   console.log(data);
// })

// 监听其他事件
reader.on('open', () => {
  console.log(`文件被打开了`);
})

reader.on('close', () => {
  console.log(`文件被关闭了`);
})

// 设定每次读取都间隔一秒
reader.on('data', (data) => {
  console.log(data);
  reader.pause();
  setTimeout(() => {
    reader.resume();
  },1000)
}) 