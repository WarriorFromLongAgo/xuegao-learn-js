"use strict";
class Base {
    constructor() {
        this.name = "base";
        console.log("My name is " + this.name);
    }
}
class Derived extends Base {
    constructor() {
        super(...arguments);
        this.name = "derived";
    }
}
// Prints "base", not "derived"
const d13 = new Derived();
// 类初始化的顺序，由 JavaScript 定义，是：
// 初始化基类字段
// 基类构造函数运行
// 派生的类字段已初始化
// 派生类构造函数运行
// 这意味着基类构造函数在其自己的构造函数中看到了自己的值，因为派生的类字段初始化尚未运行。name
