// 1.作用域（scope）指的是变量存在的范围
// 全局变量     在程序中一直存在  所有地方都可以读取  
var a = 1;
function f1(){
    var b = 2;
    console.log(a);
}
f1();   //函数内部可以读取外部的全局变量
console.log(a);
// console.log(b);     //在函数内部定义的变量  外部无法读取  称为局部变量


// 1.2 覆盖同名变量
var x = 1;
function f2(){
    // 函数内部定义的变量  会覆盖同名全局变量
    var x = 2;
    console.log(x+'x');
}
f2();
console.log(x);

// 1.3 对于var命令  局部变量只能在函数内部声明  在其他区块中 都为全局变量
if(true){
    var y = 5;
}
console.log(y);     //全局变量  外部可以访问

// 1.4 函数内部的变量提升
function foo(x){
    if(x > 100){
        var temp = x - 10;
    }
}

// 等同于
// function foo(x) {
//     var tmp;
//     if (x > 100) {
//       tmp = x - 100;
//     };
//   }


// 1.5 函数本身的作用域     函数执行时所在的作用域，是定义时的作用域，而不是调用时所在的作用域
var x1 = 1;
var demo = function(){
    console.log(x1);
}

function f(){
    var x1 = 2;
    demo();
}

f();    //1  函数demo是在函数外部声明的  所以作用域是绑定在外层  内部变量x1不会访问到函数f的变量 所以输出1


// 1.6 函数体内部声明的函数  作用域绑定在函数体内部
function foo1(){
    var number1 = 10;
    // bar的作用域绑定foo
    function bar(){
        // 变量number1指向的是foo内部的number1，而不是foo外部的number1
        console.log(number1);
    }
    return bar;
}
var number1 = 20;
var foo3 = foo1();
foo3();
