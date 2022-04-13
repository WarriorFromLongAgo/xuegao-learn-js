// function use_xianzhi<T extends { length: number }>(obj: T, mini: number): T {
//     if (obj.length >= mini) {
//         return obj;
//     } else {
//         // 返回的是ige对象，对象里面必须要有这个属性值
//         return { length: mini };
//     }
// }

// const s = use_xianzhi([1, 2, 3], 5);
// console.log(s.slice(0, 2));
