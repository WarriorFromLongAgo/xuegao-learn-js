"use strict";
function doSome(fn) {
    console.log(fn.desc + " this " + fn(1));
}
function fn1(n) {
    console.log(n);
    return n > 0;
}
fn1.desc = "fn1-hello";
doSome(fn1);
