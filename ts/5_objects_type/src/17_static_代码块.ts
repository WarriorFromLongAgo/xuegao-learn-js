// class Foo {
//     static #count = 0;

//     get count() {
//         return Foo.#count;
//     }

//     static loadLastInstances() {

//     }

//     static {
//         try {
//             const lastInstances = Foo.loadLastInstances();
//             Foo.#count += lastInstances.length;
//         }
//         catch { }
//     }
// }