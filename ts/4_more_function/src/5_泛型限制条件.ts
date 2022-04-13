

function xianzhi5<T extends { length: number }>(a: T, b: T) {
    return a.length > b.length ? a : b;
}




