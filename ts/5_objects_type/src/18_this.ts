class Person18 {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    };
    getName() {
        return this.name;
    }
};

let alex18_1: Person18 = new Person18("Alex", 25);
console.log(alex18_1.getName());

class Person18_1 {
    get name(): string {
        return this.name;
    }
};


