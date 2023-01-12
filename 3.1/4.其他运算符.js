// 1.void运算符
// 执行一个表达式，然后不返回任何值，或者说返回undefined
console.log(void 0);    //undefined
console.log(void (x = 2));
console.log(x);

// 2.逗号运算符
// 用于对两个表达式求值，并返回后一个表达式的值
var x = 0;
var y = (x++, 10);
console.log(x);
console.log(y);