// 1.Error实例对象
var error = new Error('出错了');
console.log(error.message);
// 抛出Error实例对象以后，整个程序就中断在发生错误的地方，不再往下执行。
/**
 *  message：错误提示信息
    name：错误名称（非标准属性）
    stack：错误的堆栈（非标准属性）
 */
error.name = '错误';
console.log(error.name);
// 使用name和message这两个属性，可以对发生什么错误有一个大概的了解。
// stack属性用来查看错误发生时的堆栈

// 2.原生错误类型
// 2.1.1  Error实例对象是最一般的错误类型  还存在Error的6个派生对象
// (1)SyntaxError 对象
// SyntaxError对象是解析代码时发生的语法错误    
// console.log('hwllo';    //SyntaxError: missing ) after argument list     // 缺少括号

// (2) ReferenceError 对象 
// 引用一个不存在的变量时发生的错误
// console.log(b);     //ReferenceError: b is not defined

// (3) RangeError 对象  一个值超出有效范围时发生的错误
// 一是数组长度为负数，二是Number对象的方法参数超出范围，以及函数堆栈超过最大值
// var arr1 = new Array(-1);   
// console.log(arr1);  //RangeError: Invalid array length

// (4)TypeError 对象    变量或参数不是预期类型时发生的错误
// 比如，对字符串、布尔值、数值等原始类型的值使用new命令，就会抛出这种错误，因为new命令的参数应该是一个构造函数。
// console.log(new 1);     //TypeError: 1 is not a constructor

// (5) URIError 对象
// URIError对象是 URI 相关函数的参数不正确时抛出的错误
// decodeURI('%2')
// URIError: URI malformed

// (6) EvalError 对象   eval函数没有被正确执行时，会抛出EvalError错误。该错误类型已经不再使用了，只是为了保证与以前代码兼容，才继续保留

/**
 * 以上这6种派生错误，连同原始的Error对象，都是构造函数。
 * 开发者可以使用它们，手动生成错误对象的实例。这些构造函数都接受一个参数，代表错误提示信息（message）
 */

// 3.除了 JavaScript 原生提供的七种错误对象，还可以定义自己的错误对象
// function UserError(message) {
//     this.message = message || '默认信息';
//     this.name = 'UserError';
//   }
  
// UserError.prototype = new Error();
// UserError.prototype.constructor = UserError;

// 4.throw语句
// throw语句的作用是手动中断程序执行，抛出一个错误。
// var x = 1;
// if(x < 2){
//     throw new Error('这是错误的');   throw抛出的错误就是它的参数，这里是一个Error对象的实例  throw可以抛出任何类型的值   它的参数可以是任何值。
// }


// 5.try...catch结构
// 一旦发生错误，程序就中止执行了。JavaScript 提供了try...catch结构，允许对错误进行处理，选择是否往下执行
try {
    throw new Error('出错了');
} catch (e) {
    console.log(e.message);
}


// 6.finally 代码块 ，表示不管是否出现错误，都必需在最后运行的语句。
function cleanUp(){
    try {
        throw new Error('出错了...');
        console.log('这行不会执行');
    } catch(error){
        console.log('程序出错');
    } finally {
        console.log('完成清理工作');
    }
}

cleanUp();