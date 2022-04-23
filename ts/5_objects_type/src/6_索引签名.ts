interface NumberDictionary {
    [index: string]: number;

    length: number; // ok
    // error
    // name: string;
    // no error
    // name: number;
}

interface NumberOrStringDictionary {
    [index: string]: number | string;
    length: number; // ok, length is a number
    name: string; // ok, name is a string
}

interface ReadonlyStringArray {
    readonly [index: number]: string;
}

//   let myArray: ReadonlyStringArray = getReadOnlyStringArray();
//   myArray[2] = "Mallory";

let myArray: ReadonlyStringArray = ["Alice", "Bob"];
let myArray2 = myArray[1];
console.log("myArray2:", myArray2);
