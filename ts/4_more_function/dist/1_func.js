"use strict";
// function greeter(fn: (name: string) => string) {
//     return fn("TypeScript");
// }
// 传进来一个方法
function greeter(fn) {
    return fn("TypeScript");
}
function consoleV2(s) {
    console.log(s);
    return s;
}
greeter(consoleV2);
// TypeScript
