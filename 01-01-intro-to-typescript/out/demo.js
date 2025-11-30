"use strict";
let firstName = 'Pencho';
let lastName = 'Ivanov';
let age = 30;
let hasGraduated = false;
let skills = ['JS', 'HTML', 'TS'];
let certificateInfo = [
    'MySql',
    2025,
    true
];
let stNumArr = ['pen4o', 45];
var DaysOfWeek;
(function (DaysOfWeek) {
    DaysOfWeek[DaysOfWeek["Monday"] = 0] = "Monday";
    DaysOfWeek[DaysOfWeek["Tuesday"] = 1] = "Tuesday";
    DaysOfWeek[DaysOfWeek["Wednesday"] = 2] = "Wednesday";
    DaysOfWeek[DaysOfWeek["Thursday"] = 3] = "Thursday";
    DaysOfWeek[DaysOfWeek["Friday"] = 4] = "Friday";
    DaysOfWeek[DaysOfWeek["Saturday"] = 5] = "Saturday";
    DaysOfWeek[DaysOfWeek["Sunday"] = 6] = "Sunday";
})(DaysOfWeek || (DaysOfWeek = {}));
var Directions;
(function (Directions) {
    Directions[Directions["Up"] = 0] = "Up";
    Directions[Directions["Down"] = 1] = "Down";
    Directions[Directions["Left"] = 2] = "Left";
    Directions[Directions["Right"] = 3] = "Right";
})(Directions || (Directions = {}));
function movePoint(point, moveDirection) {
    if (moveDirection === Directions.Up) {
        return { x: point.x, y: point.y + 1 };
    }
    else if (moveDirection === Directions.Down) {
        return { x: point.x, y: point.y - 1 };
    }
    else if (moveDirection === Directions.Right) {
        return { x: point.x + 1, y: point.y };
    }
    else if (moveDirection === Directions.Left) {
        return { x: point.x - 1, y: point.y };
    }
}
let point = { x: 0, y: 0 };
console.log(movePoint(point, Directions.Left));
function greetUser(username, addHello) {
    console.log(addHello);
    if (addHello === true) {
        return `Hello, ${username}`;
    }
    return username;
}
console.log(greetUser('Pencho'));
// const inputEl = document.getElementById('email') as HTMLInputElement;
// console.log(inputEl!.value);
// type predicate function
function isNumber(val) {
    return typeof val === 'number';
}
function formatData(a, b) {
    if (isNumber(a) && isNumber(b)) {
        console.log(a + b);
    }
    else {
        console.log(`${a} <-> ${b}`);
    }
}
formatData('5', '8');
//# sourceMappingURL=demo.js.map