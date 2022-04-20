function makeDate(timestamp: number): Date

function makeDate(m: number, d: number, y: number): Date

function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
    if (d !== undefined && y !== undefined) {
        return new Date(y, mOrTimestamp, d);
    } else {
        return new Date(mOrTimestamp);
    }
}

const date1 = makeDate(12345678);
console.log("date1: ", date1);
const date2 = makeDate(1, 2, 3);
console.log("date2: ", date2);
// const date3 = makeDate(1, 9);

