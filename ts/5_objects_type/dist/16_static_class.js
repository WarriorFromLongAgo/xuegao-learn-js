"use strict";
// Unnecessary "static" class
class MyStaticClass {
    static doSomething() {
        console.log("MyStaticClass doSomething");
    }
}
// Preferred (alternative 1)
function doSomething() {
    console.log("doSomething");
}
// Preferred (alternative 2)
const MyHelperObject = {
    dosomething() {
        console.log("MyHelperObject doSomething");
    },
};
