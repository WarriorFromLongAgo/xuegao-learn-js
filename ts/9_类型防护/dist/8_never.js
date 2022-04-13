"use strict";
function getAreaV2(shape) {
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
