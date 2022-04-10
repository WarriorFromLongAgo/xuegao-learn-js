"use strict";
var dic;
(function (dic) {
    dic[dic["Up"] = 1] = "Up";
    dic[dic["Down"] = 2] = "Down";
    dic[dic["Left"] = 3] = "Left";
    dic[dic["Right"] = 4] = "Right";
})(dic || (dic = {}));
console.log(dic.Up);
console.log(dic.Down);
console.log(dic.Left);
console.log(dic.Right);
