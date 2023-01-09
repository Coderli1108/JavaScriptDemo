// 数组（array）是按次序排列的一组值
// 1.定义且赋值
var arr1 = ['a', 'b', 'c'];
console.log(arr1);
// 2.先定义再赋值
var arr2 = [];
arr2[0] = 'a';
arr2[1] = 'b';
arr2[2] = 'c';
console.log(arr2);
// 3.任何类型的数据，都可以放入数组。
var arr3 = [
    {a: 1},
    function f1(){

    },
    [1,2,3]
];
console.log(arr3);
// 4.如果数组的元素还是数组，就形成了多维数组
var arr4 = [[1,2,3],[3,4]];
console.log(arr4);
// 5.本质上，数组属于一种特殊的对象。typeof运算符会返回数组的类型是object
console.log(typeof [1,2,3]);    //object

// 6.数组的特殊性体现在键名是按照次序排列的整数
console.log(Object.keys(arr1));     //[ '0', '1', '2' ]

// 7.length属性 返回数组的成员变量  该属性是一个动态的值，等于键名中的最大整数加上1
// length属性的值总是比最大的那个整数键大1,     数组是一种动态的数据结构，可以随时增减数组的成员
var arr5 = [1,3,4];
console.log(arr5.length);   //3
// length属性是可写的   如果人为设置一个小于当前成员个数的值，该数组的成员数量会自动减少到length设置的值。
arr5.length = 2;
console.log(arr5);
// 清空数组 设置length属性值为0
arr5.length = 0;
console.log(arr5);
// 当length属性设为大于数组个数时，读取新增的位置都会返回undefined
var arr6 = [1];
arr6.length = 2;
console.log(arr6[1]);
// 为数组添加属性 不影响length的值  length属性的值就是等于最大的数字键加1，而这个数组没有整数键，所以length属性保持为0
var arr7 = [];
arr7['p'] = 123;
console.log(arr7.length);   //0
arr7[1.2] = 123;
console.log(arr7.length);   //0
// 如果数组的键名是添加超出范围的数值，该键名会自动转为字符串
var arr8 = [];
arr8[Math.pow(2, 32)] = 'b';
console.log(arr8[4294967296]);  //之所以取到值是因为数字键被转化成了字符串

