// 1.break 用于跳出当前循环或者代码块
var i = 0;
while(i < 10){
    console.log('i当前为: '+i);
    i++;
    if(i === 9) break;
}

// 2.continue用于跳出当前循环 并返回循环体的头部 继续下一次循环
var x = 0;
while(x < 10){
    x++;
    if(x === 5) continue;
    console.log('x当前为: '+x);
}