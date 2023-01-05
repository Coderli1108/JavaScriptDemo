// 1.while语句   符合条件执行循环体中的语句  条件为正则一直是死循环
var i = 0;
while(i < 100){
    console.log('当前的i: '+i);
    i = i + 1;
}

// 2.do...while语句    至少执行一次循环体  再进行条件判断
var x = 0;
do{
    console.log('当前的x: '+x);
    x++;
}while(x < 10)

// 3.for循环  可以指定循环的起点、终点、循环条件
for(var y = 0; y < 10; y++){
    console.log('当前的y: '+y);
    // y = 0 初始表达式
    // y < 10 条件表达式
    // y++ 递增表达式
    
    // for循环的三个表达式可以全部省略
}
