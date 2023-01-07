// 1.函数的声明

// function命令
function myFunction(param){
    console.log('function命令创建函数');
}

// 函数表达式
// 如果使用函数表达式 function后面跟上函数名 则函数名只在函数体内部有效
var myFunction2 = function x(param){
    console.log(typeof x);  //function
    console.log('函数表达式创建函数');
};
myFunction2();

// function构造函数
var myFunction3 = new Function(
    'x',
    'y',
    'return x + y'
);
console.log(myFunction3(1,2));

// 函数递归
function fib(num){
    if(num === 0) return 0;
    if(num === 1) return 1;
    return fib(num -2) + fib(num - 1);
}
console.log(fib(6)); 
// fib函数内部又调用了fib   


// 函数名的提升  使用函数声明创建函数  存在函数名提升

myFunction4();  //在调用之前已经声明了函数

function myFunction4(){
    console.log('object');
}


// 采用赋值语句定义函数会报错  不存在函数名提升

// myFunction5();  //myFunction5 is not a function
// var myFunction5 = function(){
//     console.log('xxxx');
// }


