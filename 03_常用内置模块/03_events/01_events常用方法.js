const EventEmitter = require('events');

// 创建发射器
const emitter = new EventEmitter();

// 监听事件
emitter.on('click', (args) => {
  console.log(args);
})

const listener = (args) => {
  console.log(args);
};

// 监听事件
emitter.on('click', listener);

// 发出事件
setTimeout(() => {
  emitter.emit('click', 'mx');
  emitter.off('click',listener);
  emitter.emit('click', 'xx');
}, 2000);