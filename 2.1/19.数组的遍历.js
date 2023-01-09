// 检查某个键名是否存在的运算符in，适用于对象，也适用于数组
var arr1 = ['a', 'b', 'c'];
console.log(0 in arr1); //数组存在键名为0的键   由于键名都是字符串，所以数值0会自动转成字符串。

// 如果数组某个位置是空位  in运算符返回false
arr1[100] = 'd';
console.log(99 in arr1);    //false

// for...in 循环遍历数组
// 会遍历数组所有的数字键 也会遍历所有的非数字键
var arr2 = [1,2,3];
arr2.foo = true;
for(key in arr2){
    console.log(key);
}

