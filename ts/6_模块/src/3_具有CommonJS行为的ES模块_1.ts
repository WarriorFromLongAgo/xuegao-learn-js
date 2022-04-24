import zip = require("./3_具有CommonJS行为的ES模块");

let strings = ["Hello", "98052", "101"];
// Validators to use
let validator = new zip();
// Show whether each string passed each validator
strings.forEach((s) => {
    console.log(
        `"${s}" - ${validator.isAcceptable(s) ? "matches" : "does not match"}`
    );
});