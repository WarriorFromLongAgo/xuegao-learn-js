"use strict";
let alex = {
    name: 'Alex',
    age: 20
};
console.log("alex:", alex);
class Person10_1 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
;
let alex1 = {
    name: 'Alex',
    age: 20
};
console.log("alex1:", alex1);
let alex1_1 = new Person10_1("11", 0);
console.log("alex1_1:", alex1_1);
class Person11 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
;
// 将这个变量约束为这个接口的格式，定义 name 和 age 的时候，也必须要满足接口要求的类型
let alex2 = {
    name: 'Alex',
    age: 20
};
console.log("alex2:", alex2);
