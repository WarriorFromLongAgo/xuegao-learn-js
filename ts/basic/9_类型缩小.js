"use strict";
// function a9(x: number | string): string {
//     return new Array(x + 1).join('x');
// }
// 类型防护
// 类型缩小，
function b9(x) {
    if (typeof x === 'number') {
        return new Array(x + 1).join('x');
    }
    return new Array(x).join('x');
}
