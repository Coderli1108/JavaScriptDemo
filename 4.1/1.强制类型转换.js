// 1.1Number  可以将任意数据类型转换成数值类型
// 1.1.1 原始值
console.log(Number('123'));
console.log(Number(''));
console.log(Number(undefined)); //NaN
console.log(Number(null));

// 1.1.2对象
// Number()参数是对象时 将返回NaN 除非是包含单个数值的数组
console.log(Number({a: 1}));
console.log(Number([1,2,3]));
console.log(Number([2]));

/**
 * 第一步，调用对象自身的valueOf方法。如果返回原始类型的值，则直接对该值使用Number函数，不再进行后续步骤
 * 第二步，如果valueOf方法返回的还是对象，则改为调用对象自身的toString方法。如果toString方法返回原始类型的值，则对该值使用Number函数，不再进行后续步骤。
 * 第三步，如果toString方法返回的是对象，就报错。
 */

// 2.1String()  将任意类型的值转化成字符串
// 2.1.1 原始值
/**
 *  数值：转为相应的字符串。
    字符串：转换后还是原来的值。
    布尔值：true转为字符串"true"，false转为字符串"false"。
    undefined：转为字符串"undefined"。
    null：转为字符串"null"。
 */
console.log(String(122));
console.log(String('123'));
console.log(String(true));
console.log(String(undefined));
console.log(String(null));
// 2.1.2 对象   String方法的参数如果是对象，返回一个类型字符串；如果是数组，返回该数组的字符串形式。
console.log(String({a : 1}));
console.log(String([1,2,3]));

/**
 * String方法背后的转换规则，与Number方法基本相同，只是互换了valueOf方法和toString方法的执行顺序。
    先调用对象自身的toString方法。如果返回原始类型的值，则对该值使用String函数，不再进行以下步骤。
    如果toString方法返回的是对象，再调用原对象的valueOf方法。如果valueOf方法返回原始类型的值，则对该值使用String函数，不再进行以下步骤。
    如果valueOf方法返回的是对象，就报错
    */


//3.1 Boolean()     将任意类型的值转为布尔值
// 除了以下五个值的转换结果为false，其他的值全部为true。
/**
 *  undefined
    null
    0（包含-0和+0）
    NaN
    ''（空字符串）
 */
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(''));
// 所有对象（包括空对象）的转换结果都是true，甚至连false对应的布尔对象new Boolean(false)也是true
console.log(Boolean({}));
console.log(Boolean(new Boolean(false)));