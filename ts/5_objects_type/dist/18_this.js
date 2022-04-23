"use strict";
class Person18 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    ;
    getName() {
        return this.name;
    }
}
;
let alex18_1 = new Person18("Alex", 25);
console.log(alex18_1.getName());
class Person18_1 {
    get name() {
        return this.name;
    }
}
;
