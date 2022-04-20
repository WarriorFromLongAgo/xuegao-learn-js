"use strict";
function shapeFn(opt) {
}
const shape = {};
// error
// shapeFn({shape})
shapeFn({ shape, x1: 10, y1: 20 });
