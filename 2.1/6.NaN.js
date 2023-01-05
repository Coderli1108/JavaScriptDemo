// NaN不是特殊的数据类型 而是特殊的数值 typeof检查仍然是 number
console.log(typeof NaN);    //number

// 主要出现在将字符串解析成数字出错的场合
console.log(Math.acos(2));  //NaN
// 0 / 0 也会得到NaN
console.log(0 / 0);     //NaN
// NaN不等于任何值 包括它本身
console.log(NaN === NaN);   //false
// NaN与任何值运算都得到NaN
console.log(22 + NaN);  //NaN