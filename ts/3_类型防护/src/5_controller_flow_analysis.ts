function example() {
    let x: string | number | boolean;
    x = Math.random() > 5 ? 'string' : 5;
    return x;
}

let x = example();
x = 'string';
x = 100;
// x = true;

