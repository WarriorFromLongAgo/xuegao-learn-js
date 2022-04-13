"use strict";
class Ctor {
    constructor(s) {
        this.s = s;
    }
}
function fn(ctor) {
    return new ctor('hello');
}
const d = fn(Ctor);
// hello
console.log(d.s);
