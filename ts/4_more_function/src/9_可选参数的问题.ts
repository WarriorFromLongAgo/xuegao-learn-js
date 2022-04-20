function myForeach(arr: any[], callback: (item: any, index?: number) => void) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i);
        // callback(arr[i]);
    }
}

// 永远不要在回调函数里面写，可选参数
