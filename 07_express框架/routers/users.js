const express = require('express');

const router = express.Router();
// 封装一个get接口
router.get('/', (req, res, next) => {
  res.json(["curry", "james", "kobe"]);
})
// 封装一个post接口
router.get('/:id', (req, res, next) => {
  res.json(`${req.params.id}用户的信息`);
})

router.post('/', (req, res, next) => {
  res.json('路由创建成功');
})


module.exports = router;