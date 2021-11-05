const message = "hello";
// 创建buffer方式一：不推荐
// const buffer = new Buffer(message);
// console.log(buffer);

// 创建方式二
const buffer = Buffer.from(message);
console.log(buffer);