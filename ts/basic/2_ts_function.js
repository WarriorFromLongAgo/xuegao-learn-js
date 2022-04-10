"use strict";
function get1(name) {
    console.log("name  = " + name);
}
get1(" get1 ");
function get2(name) {
    console.log("name  = " + name);
    return 123;
}
let get22 = get2(" get1 ");
console.log("get22 = " + get22);
const nameArr = ["name1", "name2"];
nameArr.forEach(function (name) {
    console.log("name  = " + name);
});
nameArr.forEach(() => {
    console.log("name  = " + name);
});
nameArr.forEach((s) => {
    console.log("name  = " + s.toUpperCase());
});
function get3(obj) {
    console.log("name  = " + obj.name);
    console.log("name2  = " + obj.name2);
}
get3({
    name: "name1",
    name2: "name2"
});
function get4(obj) {
    console.log("name  = " + obj.name);
    console.log("name2  = " + obj.name2);
}
get4({
    name: "name1"
});
get4({
    name: "name1",
    name2: "name2"
});
function get5(obj) {
    console.log("name  = " + obj.name);
    console.log("name2  = " + obj.name2);
}
get5({
    name: "name1",
    name2: "name2"
});
get5({
    name: "name1",
    name2: 111
});
function diyString(str) {
    return 'diyString';
}
