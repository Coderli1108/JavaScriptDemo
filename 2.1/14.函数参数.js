// 函数的参数可以省略  省略的参数的值变为undefined
function f1(a,b){
    return a+'+'+b;
}
console.log(f1(1,2,3))
console.log(f1(1,2));
console.log(f1());

// 没有办法只省略靠前的参数，而保留靠后的参数。如果一定要省略靠前的参数，只有显式传入undefined
console.log(f1(undefined, 2));


// 参数传递方式   函数参数如果是原始数据类型   传递方式是传值传递  那么在函数体内部修改参数值  外部不会受到影响    
var a = 1;
function f2(a){
    // a的值是原始值的拷贝，无论怎么修改，都不会影响到原始值
    a  = 2;
}
f2(a);
console.log(a);
// 如果函数参数是复合类型的值（数组、对象、其他函数），传递方式是传址传递   
var obj = {
    x: 1
}
function f3(obj){
    obj.x = 2;
}
f3(obj);
console.log(obj.x);

// 如果在函数内部修改的不是参数对象的某个属性 而是替换整个参数  那么不会影响到原始值
var obj2 = [1,2,3];
function f4(param){
    param = [2,3,4];
}
f4(obj2);
console.log(obj2);
// 形式参数（param）的值实际是参数obj2的地址，重新对param赋值导致param指向另一个地址，保存在原地址上的值当然不受影响


// 参数的同名 如果同名 取后者
function f5(a,a){
    return a;
}
console.log(f5(1,3));
// 如果后者没有值 则为undefined  仍然以后者为准
console.log(f5(1));





