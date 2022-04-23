interface Animal12 {
    dateOfBirth: any;
}

interface Dog12 extends Animal12 {
    breed: any;
}

class AnimalHouse12 {
    resident: Animal12;
    constructor(animal: Animal12) {
        this.resident = animal;
    }
}

class DogHouse12 extends AnimalHouse12 {
    declare resident: Dog12;
    constructor(dog: Dog12) {
        super(dog);
    }
}

// class DogHouse12_1 extends AnimalHouse12 {
//     resident: Dog12;
//     constructor(dog: Dog12) {
//         super(dog);
//     }
// }

let animal1: Animal12 = { dateOfBirth: "Animal12" }
console.log("animal1: ", animal1);
let breed1: Dog12 = { breed: "Animal12", dateOfBirth: "Dog12" }
console.log("breed1: ", breed1);
let animalHouse1: AnimalHouse12 = new AnimalHouse12(animal1);
console.log("animalHouse1: ", animalHouse1);
let dogHouse1: DogHouse12 = new DogHouse12(breed1);
console.log("dogHouse1: ", dogHouse1);

