// 使用sharp库可以对图片进行处理
// const sharp = require('sharp');

// sharp('./meinv.jpg').resize(200, 200).toFile('./meinvzi.png');

const buffer = Buffer.from('./meinv.jpg');
console.log(buffer);