// 1.  + 法运算符
console.log(1+ 1);
// 允许非数值进行运算
console.log(true + true);   //布尔值都会自动转成数值，然后再相加
// 字符串相加 加法运算符会变成连接运算符
console.log('12'+'23');
// 1.2对象的相加
var obj1 = {p: 1};
console.log(obj1 + 2);  //对象obj转成原始类型的值是[object Object]，再加2就得到了上面的结果。
// 上述对象先执行valueOf()方法再进行toString()运算  可以由此自定义
var obj2 = {
    valueOf: function(){
        return 1;
    }
};
console.log(obj2 + 2);  //3
// 自定义toString()
var obj3 = {
    toString: function(){
        return 'hello';
    }
};
console.log(obj3 + 2);  //hello2
// 如果运算子是一个Date对象的实例，那么会优先执行toString方法
var obj4 = new Date();
obj4.valueOf = function(){return 1};
obj4.toString = function(){return 'hello'}; 
console.log(obj4 + 5);  //hello5

// 2.% 余数运算符
// 运算结果的正负号由第一个运算子决定
console.log(1 % 2);
console.log(-1 % 2);
console.log(1 % -2);

// 3.自增自减运算符 会修改原始变量  运算之后，变量的值发生变化，这种效应叫做运算的副作用（side effect）
var x = 1;
console.log(++x);
console.log(--x);
// 自增和自减运算符有一个需要注意的地方，就是放在变量之后，会先返回变量操作前的值，再进行自增/自减操作；
// 放在变量之前，会先进行自增/自减操作，再返回变量操作后的值
var a = 1, b = 2;
// console.log(a++);
// console.log(b++);
console.log(++a);
console.log(++b);


// 4.数值运算符和负数值运算符   数值运算符的作用在于可以将任何值转为数值（与Number函数的作用相同）
var str1 = 'hello';
console.log(+str1);
console.log(+true);
// 负数值运算符（-），也同样具有将一个值转为数值的功能，只不过得到的值正负相反。连用两个负数值运算符，等同于数值运算符
console.log(-true);
console.log(-(-true));

// 5. ** 指数运算符
// 指数运算符（**）完成指数运算，前一个运算子是底数，后一个运算子是指数
console.log(2 ** 2);
// 指数运算符是右结合，而不是左结合。即多个指数运算符连用时，先进行最右边的计算。
console.log(2 ** 2 ** 4);   //  2 ** (2 ** 4)
