function name4<Type>(arr: Type[]): Type | undefined {
    return arr[0];
}

function name44<T>(arr: T[]): T | undefined {
    return arr[0];
}

const S1 = name44([1, 2, 3]);
console.log(S1 + " === " + typeof S1);
const S2 = name44(['1', '2', '3']);
console.log(S2 + " === " + typeof S2);
const S3 = name44([]);
console.log(S3);

const S11 = name44<Number>([1, 2, 3]);
console.log(S11 + " === " + typeof S11);
const S111 = name44<number>([1, 2, 3]);
console.log(S111 + " === " + typeof S111);



function dealMap<input, output>(arr: input[], func: (arg: input) => output): output[] {
    return arr.map(func);
}

const arr = dealMap(['1', '2', '3'], (arg) => parseInt(arg));
console.log(arr);


