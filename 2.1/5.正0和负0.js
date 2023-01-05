// JavaScript 内部实际上存在2个0：一个是+0，一个是-0，区别就是64位浮点数表示法的符号位不同。它们是等价的
console.log(+0 === -0); //true
console.log((+0).toString());   //0
console.log((-0).toString());   //0

// 唯一有区别的场合是，+0或-0当作分母，返回的值是不相等的
console.log(1 / +0);    //Infinity
console.log(1 / -0);    //-Infinity