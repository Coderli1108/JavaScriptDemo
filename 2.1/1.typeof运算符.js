// typeof运算符  返回一个值的数据类型

console.log(typeof 123);    //number
console.log(typeof '123');  //string
console.log(typeof false); //boolean

function a(){

}
console.log(typeof a);  //function 
console.log(typeof undefined);  //undefined

// 检查一个未声明的变量
// x
// console.log(typeof x);  // x is not defined

if(typeof x === 'undefined'){
    console.log('x is undefined');
}

console.log(typeof {}); //object
console.log(typeof []); //object    js内部 数组本质上是一种特殊的对象

console.log(typeof null);   //object    null独立出来, 因为历史遗留问题 导致typeof null 返回object
