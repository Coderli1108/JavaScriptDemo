// 1.取反运算符（!）
// 用于将布尔值变为相反值，即true变成false，false变成true。
console.log(!true);

// 2.且运算符（&&）
// 如果第一个运算子的布尔值为true，则返回第二个运算子的值（注意是值，不是布尔值）；
// 如果第一个运算子的布尔值为false，则直接返回第一个运算子的值，且不再对第二个运算子求值
console.log(1 && true);
console.log(0 && false);
// 且运算符可以多个连用，这时返回第一个布尔值为false的表达式的值。如果所有表达式的布尔值都为true，则返回最后一个表达式的值
console.log(1 && true && undefined && false);
console.log(1 && '22' && true);

// 3.或运算符（||）
// 如果第一个运算子的布尔值为true，则返回第一个运算子的值，且不再对第二个运算子求值；
// 如果第一个运算子的布尔值为false，则返回第二个运算子的值
console.log(1 || 0);
console.log(0 || 1 || true);

// 4.三元条件运算符（?:）
// 如果第一个表达式的布尔值为true，则返回第二个表达式的值，否则返回第三个表达式的值
var x = 1;
var result = x < 2 ? 'yes' : 'no';
console.log(result);
// 三元条件表达式是表达式，具有返回值