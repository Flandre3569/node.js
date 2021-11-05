const express = require('express');
const userRouter = require('./routers/users');

const app = express();

app.use("/users", userRouter);

// 静态资源部署
// 直接调用static方法就可以了，参数是静态打包文件的相对路径
// app.use(express.static('/build'));

app.listen(8000, () => {
  console.log(`路由服务器启动成功`);
})
