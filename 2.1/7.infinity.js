// Infinity表示“无穷”，用来表示两种场景。一种是一个正的数值太大，或一个负的数值太小，无法表示；另一种是非0数值除以0，得到Infinity

// 场景一
console.log(Math.pow(5, 22222));    //Infinity
// 场景二
console.log(1 / 0); //Infinity

// Infinity有正负之分，Infinity表示正的无穷，-Infinity表示负的无穷
console.log(+Infinity === -Infinity);   //false

// Infinity > 任何数值(除了NaN)  -Infinity < 一切数值(除了NaN)
console.log(Infinity > 1000);
console.log(Infinity > NaN);

console.log(-Infinity < -1000);
console.log(-Infinity < NaN);

// 运算规则
console.log(0 * Infinity);  //NaN
console.log(0 / Infinity);  //0
console.log(Infinity / 0);  //Infinity

console.log(Infinity * Infinity);   //Infinity
console.log(Infinity + Infinity);   //Infinity

console.log(Infinity - Infinity);   //NaN
console.log(Infinity / Infinity);   //NaN

// Infinity 和 undefined运算 都返回 NaN
// Infinity 和 null运算
console.log(null * Infinity);   //NaN
console.log(null / Infinity);   //0
console.log(Infinity / null);   //Infinity



