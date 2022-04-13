function name8(params?: number, params2?: number): number {
    if (params !== undefined && params2 !== undefined) {
        return params + params2;
    }
    return 0;
}

// 默认值 = 100,有默认值，可以传参数可以不传
// function name88(params?: number = 100, params2?: number = 200): number {
//     if (params === undefined && params2 === undefined) {
//         return params + params2;
//     }
//     return 0;
// }