const express = require('express')

const router = express.Router()

router.get('/:id', (req, res, next) => {
  res.json(`${req.params.id}用户信息`)
})

router.get('/', (req, res, next) => {
  res.json(["zhangsan", "jack", "mark"])
})

module.exports = router;