"use strict";
// 类型缩小， 等等
function printAll(strArr) {
    // 去掉这里，就会是正常的
    if (strArr == null) {
        return;
    }
    if (typeof strArr === 'string') {
        console.log(strArr);
    }
    else if (typeof strArr === 'object') {
        for (const str of strArr) {
            console.log(str);
        }
    }
    else {
        console.log("null");
    }
}
