"use strict";
function swap(a, aIndex, b, bIndex) {
    // размяна a[aIndex] и b[bIndex] 
    // 1. запазване, 2. презаписване 1 с 2, 3. презаписване 2 с запазената стойност
    const temp = a[aIndex];
    a[aIndex] = b[bIndex];
    b[bIndex] = temp;
}
let a = ['test', '123'];
let b = ['a', 'b', 'c'];
swap(a, 0, b, 2);
console.log(a);
console.log(b);
//# sourceMappingURL=01-array-swap.js.map