const express = require('express');

const app = express();

// 连续注册中间件

app.get('/home', (req, res, next) => {
  console.log(`home middleware 01`);
  next();
}, (req, res, next) => {
    console.log(`home middleware 02`);
    next();
}, (req, res, next) => {
    console.log(`home middleware 03`);
    next();
}, (req, res, next) => {
    console.log(`home middleware 04`);
    res.end('hello world')
})

app.listen('8000', () => {
  console.log(`express初体验`);
})