// null 和 undefined 含义很相似 布尔值都为false   
if(!null){
    console.log('null is false');
}

if(!undefined){
    console.log('undefined is false');
}

// ==判断两者相等
console.log(null == undefined); //true

// null表示空值  转化成数值时 为 0
// undefined 表示未定义  转化成数值时 为 NaN

console.log(Number(null));  //0
console.log(Number(undefined)); //NaN