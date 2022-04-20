"use strict";
function myForeach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i);
        // callback(arr[i]);
    }
}
// 永远不要在回调函数里面写，可选参数
