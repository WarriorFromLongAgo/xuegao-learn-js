"use strict";
class Empty {
}
function fn(arg) {
    // do something?
    // arg.k
}
// No error, but this isn't an 'Empty' ?
fn({ k: 10 });
