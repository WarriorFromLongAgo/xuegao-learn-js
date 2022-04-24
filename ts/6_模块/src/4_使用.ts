import { StringValidator } from "./4_接口与实现类_多文件";
import { LettersOnlyValidator } from "./4_实现1";
import { ZipCodeValidator } from "./4_实现2";

// Some samples to try
let strings = ["Hello", "98052", "101"];
// Validators to use
let validators: { [s: string]: StringValidator } = {};
validators["ZIP code"] = new ZipCodeValidator();
validators["Letters only"] = new LettersOnlyValidator();
// Show whether each string passed each validator
strings.forEach((s) => {
    for (let name in validators) {
        console.log(
            `"${s}" - ${validators[name].isAcceptable(s) ? "matches" : "does not match"
            } ${name}`
        );
    }
});