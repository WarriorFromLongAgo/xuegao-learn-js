type voidFunc = () => void;

const f1: voidFunc = () => {
    return true;
};

const f2: voidFunc = () => true;

const f3: voidFunc = function () {
    return true;
};

const v1 = f1();
console.log("v1:", v1);

const v2 = f2();
console.log("v2:", v2);

const v3 = f3();
console.log("v3:", v3);



// function f2(): void {
//     // @ts-expect-error
//     return true;
// }

// const f3 = function (): void {
//     // @ts-expect-error
//     return true;
// };