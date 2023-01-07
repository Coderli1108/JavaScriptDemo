// eval命令接受一个字符串作为参数，并将这个字符串当作语句执行
eval('a = 1');
console.log(a);

// 如果参数字符串无法当作语句运行，那么就会报错
// eval('ax');

// 如果eval的参数不是字符串，那么会原样返回
console.log(eval(123));

// eval没有自己的作用域，都在当前作用域内执行，因此可能会修改当前作用域的变量的值，造成安全问题
var x = 1;
eval('x = 2');
console.log(x);
// 为了防止这种风险，JavaScript 规定，如果使用严格模式，eval内部声明的变量，不会影响到外部作用域
// function f1(){
//     'use strict';
//     eval('var number = 20');
//     console.log(number);    //number is not defined
// }
// f1();