interface Circle {
    kind: 'circle';
    radius: number;
}

interface Rectangle {
    kind: 'rectangle';
    sideLength: number;
}

interface RectangleV2 {
    kind: 'rectangleV2';
    sideLength: number;
}

// type Shape7 = Circle | Rectangle;
type Shape7 = Circle | Rectangle | RectangleV2;

function getAreaV2(shape: Shape7) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * Math.pow(shape.radius, 2);
        case "rectangle":
            return Math.pow(shape.sideLength, 2);
        default:
        // const x: never = shape;
        // return x;
    }
}