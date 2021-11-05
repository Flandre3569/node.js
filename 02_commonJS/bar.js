const name = "ming";
const age = 18;

function foo() {
  console.log(`foo被调用了`);
}

exports.age = age;
exports.name = name;
exports.foo = foo;