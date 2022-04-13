"use strict";
// interface Shape {
//     kind: 'circle' | 'rectangle';
//     radius?: number;
//     sideLength?: number;
// }
// function handleShape(shape: Shape) {
//     if (shape.kind === 'circle') {
//         console.log(shape.radius);
//     } else {
//         console.log(shape.sideLength);
//     }
// }
// // function getArea(shape: Shape) {
// //     return Math.PI * Math.pow(shape.radius, 2);
// // }
// interface Circle {
//     kind: 'circle';
//     radius: number;
// }
// interface Rectangle {
//     kind: 'rectangle';
//     sideLength: number;
// }
// type Shape7 = Circle | Rectangle;
// function getAreaV2(shape: Shape7) {
//     switch (shape.kind) {
//         case "circle":
//             return Math.PI * Math.pow(shape.radius, 2);
//         case "rectangle":
//             return Math.pow(shape.sideLength, 2);
//         default:
//             break;
//     }
// }
