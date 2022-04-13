"use strict";
function name4(arr) {
    return arr[0];
}
function name44(arr) {
    return arr[0];
}
const S1 = name44([1, 2, 3]);
console.log(S1 + " === " + typeof S1);
const S2 = name44(['1', '2', '3']);
console.log(S2 + " === " + typeof S2);
const S3 = name44([]);
console.log(S3);
const S11 = name44([1, 2, 3]);
console.log(S11 + " === " + typeof S11);
const S111 = name44([1, 2, 3]);
console.log(S111 + " === " + typeof S111);
function dealMap(arr, func) {
    return arr.map(func);
}
const arr = dealMap(['1', '2', '3'], (arg) => parseInt(arg));
console.log(arr);
