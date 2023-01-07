// 对象就是一组“键值对”（key-value）的集合，是一种无序的复合数据集合。
var obj = {
    name: '张三',
    age: 20,

    // 如果属性是一个函数 通常称为方法
    sayHello: function(){
        console.log('hello');
    },
    obj2: {
        name: '李四'
    }
};
// 对象的所有键名都是字符串

obj.sayHello();

// 如果对象的内部的属性值还是一个对象  这就形成了链式调用
console.log(obj.obj2.name);


// 对象的引用   使用不同的变量名指向同一个对象  那么就是对象的引用  指向同一个内存地址  修改一个变量会影响到其他的变量
var a  = {};
var b = a;

a.name = '张三';
console.log(b.name);

b.name = '李四';
console.log(a.name);

// 如果取消一个变量对原对象的引用  那么另一个变量不会受到影响
var objA = {};
var objB = objA;
objA = 1;
console.log(objB);  //{}  更改了objA的引用  objB不受到影响仍然是一个对象


// []获取对象属性
console.log(a['name']);
console.log(obj['age']);


// 属性的查看   查看对象本身的所有属性
var a2 = {
    key1: 20,
    key2: 'name',
    key3: {

    }
}

console.log(Object.keys(a2));

// 属性的删除 delete   删除成功后返回true
delete a2.key1;
console.log(a2.key1);   //undefined
console.log(Object.keys(a2));   
console.log(delete a2.key1);    //true  删除一个不存在的属性 delete不会报错  所以不能根据delete的结果判断属性是否存在

// delete返回false的情况
var a3 = Object.defineProperty({},'p',{
    value: 123,
    configurable: false
});
console.log(delete a3.p);   //false   configurable属性控制了不可被更改导致无法删除  delete命令返回false

// delete只能删除对象本身的属性  不能删除继承的属性
console.log(delete a3.toString);
console.log(a3.toString);   //[Function: toString]  即使delete返回true，该属性依然可能读取到值。


// in运算符  判断属性是否存在   左边是一个字符串，表示属性名，右边是一个对象。  in运算符无法判断哪些属性是自身的、哪些属性是继承的
console.log('p' in a3); //true
console.log('b' in a3); //false
console.log('toString' in a3); //true
// 使用hasOwnproperty方法判断属性是自身还是继承
console.log(a3.hasOwnProperty('p'));    //true
console.log(a3.hasOwnProperty('toString')); //false



// for..in 属性遍历       遍历一个对象的全部属性。
var obj3 = {
    a: 1,
    b: 2,
    c: 3
}
for(item in obj3){
    console.log('键名: '+item);
    console.log('键值: '+obj3[item]);
}
console.log('toString' in obj3);    //true

/**
for...in循环有两个使用注意点。
    1.它遍历的是对象所有可遍历（enumerable）的属性，会跳过不可遍历的属性。
    2.它不仅遍历对象自身的属性，还遍历继承的属性。
        --  继承的属性如果是不可遍历的  那么就不会遍历到  比如 toString  存在但是无法遍历
        --  一般使用时结合hasOwnProperty方法判断属性是否是自身存在的
 */


// with语句用于对同一个对象提供操作
var obj4 = {
    a: 1,
    b: 2
}

// 操作同一个对象的多个属性时，提供一些书写的方便
with(obj4){
    a = 2,
    b = 3,
    c = 4
}

console.log(obj4);
// 如果with区块内部有变量的赋值操作，必须是当前对象已经存在的属性，否则会创造一个当前作用域的全局变量 弊端 建议使用临时变量代替temp
console.log(c);





