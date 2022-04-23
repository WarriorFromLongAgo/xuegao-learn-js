class Car {
    drive() {
        // hit the gas
    }
}
class Golfer {
    drive() {
        // hit the ball far
    }
}
// No error?
let w: Car = new Golfer();




// 2
interface Colorful {
    color: string;
}

interface Circle {
    radius: number;
}

interface ColorfulCircle extends Colorful, Circle { }

const cc: ColorfulCircle = {
    color: "red",
    radius: 42,
};
console.log("cc:", cc);

// 3
type ColorfulCircle2 = Colorful & Circle;