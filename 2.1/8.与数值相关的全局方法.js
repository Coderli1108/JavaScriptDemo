// 1.parseInt   用于将字符串转化成整数
console.log(parseInt('123'));   //123
console.log(parseInt('  888')); //888   字符串头部有空格  空格会被去除
var number = 1.23;
console.log(parseInt(number));     //parseInt()参数不是字符串  会先转化成字符串 再转为成整数


// 字符串转化成整数的过程中 遇到不能转化成数字的字符串时会停止转化
var string1 = '123abc123';
console.log(parseInt(string1));     //123
// 如果字符串头部的第一个字符不能转化成数字 将返回NaN
var string2 = 'abc';
console.log(parseInt(string2)); //NaN




// 2.parseFloat  用于将字符串转化成浮点数
console.log(parseFloat('123.4'));
//如果字符串包含不能转化的字符  返回已经转化好的
console.log(parseFloat('123.4weqwar'));
// 自动过滤前导的空格
console.log(parseFloat('   124.2'));
// 参数不是字符串  先转化成字符串再转化成数字
console.log(parseFloat([123.2]));
// 如果第一个字符不能转化成数字  返回NaN
console.log(parseFloat([]));    //NaN



// 3.isNaN 判断一个值是否为NaN
console.log(isNaN(NaN));
console.log(isNaN(123));
// isNaN只对数值有效    isNaN结果为true时  传入的参数不一定是NaN 也可能是字符串  字符串会先被转换成数值
console.log(isNaN('hello'));    //  ==>   isNaN(Number('hello'))
// 对于对象和数组  返回true
console.log(isNaN({}));
console.log(isNaN(['xyz']));
// 对于空数组和只有一个数值成员的数组，isNaN返回false
console.log(isNaN([]));
console.log(isNaN([123]));

// 4.isFinite() 返回一个布尔值  判断是否为正常的值
console.log(isFinite(Infinity));
console.log(isFinite(-Infinity));
console.log(isFinite(NaN));
console.log(isFinite(undefined));

console.log(isFinite(null));    //true


