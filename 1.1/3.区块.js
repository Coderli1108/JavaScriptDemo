{
    // 对于var指令来说, {}不构成单独的作用域
    var a = 1;

    // let指令,{}构成单独的作用域
    let b = 2;
    console.log(a);
    console.log(b);
}

console.log(a);

console.log(b); //b is not defined  作用域外部获取不到{}中的b变量