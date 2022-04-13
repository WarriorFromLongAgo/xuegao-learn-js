function deal7<T>(arr1: T[], arr2: T[]): T[] {
    return arr1.concat(arr2);
}

const s = deal7<string | number>(['number', 'string'], [1, 2, 3]);
console.log(s);
