"use strict";
function isNonEmptyStringArray(arg) {
    return Array.isArray(arg)
        && arg.length >= 1
        && arg.every(el => typeof el === 'string');
}
let arr = ['123', '1', ''];
if (isNonEmptyStringArray(arr)) {
    console.log(arr.length); // allowed
}
//# sourceMappingURL=08.js.map