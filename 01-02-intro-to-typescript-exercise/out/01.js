"use strict";
// function checkEvenSum(num1:number, num2: number, num3: number) : boolean{
//     if((num1+num2+num3)%2 === 0 ){
//         return true;
//     } else {
//         return false;
//     }
// }
function checkEvenSum(num1, num2, num3) {
    const sum = num1 + num2 + num3;
    return sum % 2 === 0;
}
console.log(checkEvenSum(1, 2, 3));
console.log(checkEvenSum(2, 2, 3));
//# sourceMappingURL=01.js.map