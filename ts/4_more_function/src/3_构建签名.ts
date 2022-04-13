class Ctor {
    s: string;
    constructor(s: string) {
        this.s = s;
    }
}

type someConstructor = new (s: string) => Ctor;

function fn(ctor: someConstructor) {
    return new ctor('hello');
}

const d = fn(Ctor);
// hello
console.log(d.s);
