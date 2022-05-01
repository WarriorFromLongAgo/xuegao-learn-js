// /// <reference path="Validation.ts" />
// namespace Validation {
//     const numberRegexp = /^[0-9]+$/;
//     export class ZipCodeValidator implements StringValidator {
//         isAcceptable(s: string) {
//             return s.length === 5 && numberRegexp.test(s);
//         }
//     }
// }

// /// <reference path="Validation.ts" />
// /// <reference path="LettersOnlyValidator.ts" />
// /// <reference path="ZipCodeValidator.ts" />
// // Some samples to try
// let strings = ["Hello", "98052", "101"];
// // Validators to use
// let validators: { [s: string]: Validation.StringValidator } = {};
// validators["ZIP code"] = new Validation.ZipCodeValidator();
// validators["Letters only"] = new Validation.LettersOnlyValidator();
// // Show whether each string passed each validator
// for (let s of strings) {
//     for (let name in validators) {
//         console.log(
//             `"${s}" - ${validators[name].isAcceptable(s) ? "matches" : "does not match"
//             } ${name}`
//         );
//     }
// }


// 一旦涉及多个文件，我们需要确保加载所有已编译的代码。有两种方法可以做到这一点。

// 首先，我们可以使用outFile选项的串联输出将所有输入文件编译成单个JavaScript输出文件：

// tsc--outFile sample.js Test.ts
// 编译器将根据文件中存在的引用标记自动对输出文件进行排序。您还可以单独指定每个文件：

// tsc--outFile sample.js Validation.ts LettersOnlyValidator.ts ZipCodeValidator.ts Test.ts
// 或者，我们可以使用每个文件编译（默认值）为每个输入文件发出一个 JavaScript 文件。如果生成了多个 JS 文件，
// 我们需要在网页上使用标记以适当的顺序加载每个发出的文件，例如：<script>

// <script src="Validation.js" type="text/javascript" />
// <script src="LettersOnlyValidator.js" type="text/javascript" />
// <script src="ZipCodeValidator.js" type="text/javascript" />
// <script src="Test.js" type="text/javascript" />



