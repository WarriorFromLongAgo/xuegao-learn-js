"use strict";
class AnimalHouse12 {
    constructor(animal) {
        this.resident = animal;
    }
}
class DogHouse12 extends AnimalHouse12 {
    constructor(dog) {
        super(dog);
    }
}
// class DogHouse12_1 extends AnimalHouse12 {
//     resident: Dog12;
//     constructor(dog: Dog12) {
//         super(dog);
//     }
// }
let animal1 = { dateOfBirth: "Animal12" };
console.log("animal1: ", animal1);
let breed1 = { breed: "Animal12", dateOfBirth: "Dog12" };
console.log("breed1: ", breed1);
let animalHouse1 = new AnimalHouse12(animal1);
console.log("animalHouse1: ", animalHouse1);
let dogHouse1 = new DogHouse12(breed1);
console.log("dogHouse1: ", dogHouse1);
