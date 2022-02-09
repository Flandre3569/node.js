const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/login', (req, res, next) => {
  const result = req.body;
  console.log(result);
  res.end('welcome')
})

app.listen(3000, () => {
  console.log('服务器已开启');
})