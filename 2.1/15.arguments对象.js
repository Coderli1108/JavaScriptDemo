// 函数参数不确定数目  为了获得所有参数  出现了arguments对象
// arguments对象包含了函数运行时的所有参数
// arguments[0]就是第一个参数，arguments[1]就是第二个参数，以此类推。这个对象只有在函数体内部，才可以使用
function f1(a,b,c){
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
}
f1(1,2,3)

// 正常模式下  arguments可以在运行时修改参数
// 严格模式下，arguments对象与函数参数不具有联动关系
function f2(a,b){
    arguments[0] = 2;
    console.log(a);
    console.log(b);
}
f2(1,2);
// arguments.length 可以获得函数调用时到底携带几个参数
function f3(){
    return arguments.length;
}
console.log(f3(1,2,3)); //3

// callee属性  返回她所对应的原函数
function f4(){
    console.log(arguments.callee === f4);
}
f4();   //true