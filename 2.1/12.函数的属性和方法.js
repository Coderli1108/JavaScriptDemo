// 1.name属性   返回函数的名字
function f1(){
    
}
console.log(f1.name);   //f1

var f2 = function(){
    
};
console.log(f2.name);   //"f2"  使用赋值语句定义函数 name属性返回变量名 匿名函数返回变量名 

// 具名函数返回function关键字后面的函数名
var f3 = function myName(){

};
console.log(f3.name);   //myName

// name属性可以获取参数函数的名字
var myFunction = function(){};
function test(param){
    console.log(param.name);    //myFunction
}
test(myFunction);

// 2.length属性  返回函数参数的个数
function f4 (a,b){
    console.log('函数参数的个数是:'+f4.length);
}
f4(1,2,3,4);   //2  不管调用时输入了多少个参数  参数个数始终是定义时的参数个数

// 3.toString()
// 函数的toString返回一个字符串  内容是函数的源码
function f5(){
    a();
    b();
    c();
}
console.log(f5.toString());
// 对于那些原生的函数，toString()方法返回function (){[native code]}



