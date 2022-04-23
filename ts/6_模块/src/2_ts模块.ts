// TypeScript 中的模块
// 语法：要使用什么语法来导入和导出内容？
// 模块解析：模块名称（或路径）与磁盘上的文件之间有什么关系？
// 模块输出目标：发出的 JavaScript 模块应该是什么样子？

export var pi = 3.14;
export let squareTwo = 1.41;
export const phi = 1.61;

export class RandomNumberGenerator { }

export function absolute(num: number) {
    if (num < 0) return num * -1;
    return num;
}

export default function helloWorld2() {
    console.log("Hello, world!");
}