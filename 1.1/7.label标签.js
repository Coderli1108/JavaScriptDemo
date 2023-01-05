 
 
// break label;   break后面跟上标签会直接跳出双层循环  break后面不跟标签跳出内层循环进入下一次外层循环
top: 
    for(var i = 0; i < 5; i++){
        for(var j = 0; j < 5; j++){
            console.log("i : " + i,"j : " + j);
            if(i == 2 && j == 2) break top;
        }
    }


    // label标签也可用于跳出代码块
foo:{
    console.log(1);
    break foo;
    console.log('本行代码不会执行');
}
console.log(2);

// label标签结合continue使用  continue跳出当前的循环，继续下一次循环
last: 
    for(var x = 0; x < 3; x++){
        for(var y = 0; y < 3; y++){
            if(x === 1 && y === 1) continue last;
            console.log('x=' + x + ', y=' + y);
        }
    }