abstract class Base19 {
    abstract getName(): string;

    printName() {
        console.log("Hello, " + this.getName());
    }
}
// error
// const b = new Base19();

class Derived19 extends Base19 {
    getName() {
        return "world";
    }
}

const a19 = new Derived19();
a19.printName();

// function greet(ctor: typeof Base19) {
//     const instance = new ctor();
//     instance.printName();
// }

function greet(ctor: new () => Base19) {
    const instance = new ctor();
    instance.printName();
}
greet(Derived19);
// greet(Base19);


