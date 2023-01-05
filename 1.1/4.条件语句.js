
// 1.if结构  
var x = 2;
if (x == 2) {
    console.log('x的值为2');
}

// 2.if-else结构-->根据表达式布尔值执行不同的结果
var num = 20;
//num > 10成立 表达式布尔值为true  执行 console.log("right");
if (num > 10) {
    console.log("right");
} else {
    // 表达式布尔值为false  执行  console.log("error");
    console.log("error");
}

// 3.switch语句 多个if-else可以考虑改写成switch
// 根据变量不同 执行不同的case
// break用于跳出当前继续下一次并不是跳出switch结构
var a = 3;
// switch中的比较使用的是===(严格相等) 不会发生类型转换 
switch (a) {
    case 1:
        console.log('1');
        break;
    case 2:
        console.log('2');
        break;
    case 3:
        console.log('3');
        break;
    default:
        console.log('error');
}

// 4.三元运算符
var number = 10;
// 符合条件执行 : 之前的语句, 否则执行 : 之后的语句
console.log(number < 20 ? 'true' : 'false');    //true




