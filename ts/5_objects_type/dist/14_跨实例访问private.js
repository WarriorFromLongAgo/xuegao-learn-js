"use strict";
class A {
    constructor() {
        this.x = 10;
    }
    sameAs(other) {
        // No error
        return other.x === this.x;
    }
}
// TypeScript 允许跨实例访问：private
