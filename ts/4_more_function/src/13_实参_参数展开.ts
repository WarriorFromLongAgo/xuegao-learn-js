const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

arr1.push(...arr2);
console.log("arr1", arr1);
console.log("arr2", arr2);

const arr10 = [1, 2, 3];
// const arr20 = Math.atan2(...arr10);

// const arr100 = [1, 2, 3] as const;
// const arr200 = Math.atan2(...arr100);

const arr1000 = [1, 3] as const;
const arr2000 = Math.atan2(...arr1000);