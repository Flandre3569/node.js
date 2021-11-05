const message = "你好";
const buffer = Buffer.from(message);
console.log(buffer);

// 对utf8进行解码
console.log(buffer.toString());

// 对buffer代表的二进制进行修改，buffer是以数组的形式存储二进制的
const buffer2 = Buffer.from(message);
buffer2[0] = 0x66;
buffer2[1] = 0x23;
console.log(buffer2.toString());

