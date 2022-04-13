// function greeter(fn: (name: string) => string) {
//     return fn("TypeScript");
// }

// function consoleV2(s: string): string {
//     console.log(s);
//     return s;
// }

// greeter(consoleV2);

// TypeScript


// V2

type Greeter = (name: string) => string;

// 传进来一个方法
function greeter(fn: Greeter) {
    return fn("TypeScript");
}

function consoleV2(s: string): string {
    console.log(s);
    return s;
}

greeter(consoleV2);

// TypeScript