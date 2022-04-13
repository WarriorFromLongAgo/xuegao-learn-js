type Fish6 = {
    name: string;
    swim: () => void;
}

type Bird6 = {
    name: string;
    fly: () => void;
}

function isFish(pet: Fish6 | Bird6): pet is Fish6 {
    return (pet as Fish6).swim !== undefined;
}

function getSmallPet(): Fish6 | Bird6 {
    let fish: Fish6 = {
        name: 'Nemo',
        swim: function () {
            console.log('swimming');
        }
    }

    let bird: Bird6 = {
        name: 'Tilapia',
        fly: function () {
            console.log('flying');
        }
    }
    return true ? bird : fish;
}

let x6 = getSmallPet();
if (isFish(x6)) {
    x6.swim();
} else {
    x6.fly();
}