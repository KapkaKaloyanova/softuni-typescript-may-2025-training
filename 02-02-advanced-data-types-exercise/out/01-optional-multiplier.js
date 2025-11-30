"use strict";
function optioanlMultiplier(val1, val2, val3) {
    // var1 preobrazuvane za undefined -> NAN
    // let num1 = typeof val1 === 'number' ? val1 : Number(val1);
    // let num2 = typeof val2 === 'number' ? val2 : Number(val2);
    // let num3 = typeof val3 === 'number' ? val3 : Number(val3);
    //var2 preobrazuvane undefined -> NAN
    // let num1 = Number(val1);
    // let num2 = Number(val2);
    // let num3 = Number(val3);
    // var3 preobrazuvane pak undefined -> NAN
    // let num1 = Number(val1) ?? 1;
    // let num2 = Number(val2) ?? 1;
    // let num3 = Number(val3) ?? 1;
    // var4 preobrazuvane
    // let num1 = val1 != undefined || null ? Number(val1) : 1;
    // let num2 = val2 != undefined || null ? Number(val2) : 1;
    // let num3 = val3 != undefined || null ? Number(val3) : 1;
    let num1 = val1 == undefined || val1 == null ? 1 : Number(val1);
    let num2 = val2 == undefined || val2 == null ? 1 : Number(val2);
    let num3 = val3 == undefined || val3 == null ? 1 : Number(val3);
    let result = num1 * num2 * num3;
    return result;
}
console.log(optioanlMultiplier('3', 5, '10'));
console.log(optioanlMultiplier('2', '2'));
console.log(optioanlMultiplier(undefined, 2, 3));
console.log(optioanlMultiplier(7, undefined, '2'));
console.log(optioanlMultiplier());
//# sourceMappingURL=01-optional-multiplier.js.map