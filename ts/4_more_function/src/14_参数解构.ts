// function sum(a: number, b: number, c: number) {
//     console.log(a + b + c);
// }

function sum({ a, b, c }: { a: number, b: number, c: number }) {
    console.log(a + b + c);
}

sum({
    a: 10,
    b: 20,
    c: 30
})