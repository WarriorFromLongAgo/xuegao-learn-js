"use strict";
function printAll(strArr) {
    if (strArr == null) {
        return;
    }
    if (typeof strArr === 'string') {
    }
    else if (typeof strArr === 'object') {
        for (const str of strArr) {
            console.log(str);
        }
    }
}
