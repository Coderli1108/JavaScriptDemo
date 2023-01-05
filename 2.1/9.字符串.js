// 1.字符串可以视为字符数组
var str = 'hello';
console.log(str[1]);    //e

// 如果索引超过字符串长度或者索引值不为数值    返回undefined
console.log(str[10]);
console.log(str['aaa']);

// 字符串无法被更改
str[1] = 'b';
console.log(str);

// length属性   返回字符串长度
console.log(str.length);
// length属性无法更改
str.length = 2;
console.log(str.length);