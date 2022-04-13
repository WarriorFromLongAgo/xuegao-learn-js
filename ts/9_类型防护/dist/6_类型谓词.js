"use strict";
function isFish(pet) {
    return pet.swim !== undefined;
}
function getSmallPet() {
    let fish = {
        name: 'Nemo',
        swim: function () {
            console.log('swimming');
        }
    };
    let bird = {
        name: 'Tilapia',
        fly: function () {
            console.log('flying');
        }
    };
    return true ? bird : fish;
}
let x6 = getSmallPet();
if (isFish(x6)) {
    x6.swim();
}
else {
    x6.fly();
}
