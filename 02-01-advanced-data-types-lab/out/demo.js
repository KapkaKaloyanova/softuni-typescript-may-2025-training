"use strict";
//! Union type
function printGreeting(text) {
    if (typeof text === 'string') {
        console.log(text);
    }
    else {
        console.log(text.join(' '));
    }
}
printGreeting('hello, Kapka');
printGreeting(['Hello', 'its', 'me']);
//! String/numeric literal type
let passFailGrade;
passFailGrade = 'pass';
console.log(passFailGrade);
let numericGrade;
numericGrade = 3;
numericGrade = 6;
function printStudentProfile(student) {
    console.log(`Student: ${student.firstName} ${student.lastName}, GPA: ${student.gpa}`);
}
let pen4oPerson = {
    firstName: 'Pen4o',
    lastName: 'Strahilov',
    age: 17,
    school: 'SMG',
    gpa: 5.5
};
let min4oPerson = {
    firstName: 'Min4o',
    lastName: 'Daskalov',
    age: 30
};
printStudentProfile(pen4oPerson);
let originPoint = {
    x: 0,
    y: 0
};
// console.log(`origin point: ${originPoint}`); // taka otechatwa samo strukturata 
// console.log(`origin point: ${JSON.stringify(originPoint)}`); // za da otpechata stojnostta na obekta
// console.log(originPoint);
let color = { red: 'cherven', blue: 'sin' };
console.log(`color: ${JSON.stringify(color)}`);
let partialOriginPoint = {
    x: 5,
    y: 1,
};
// console.log(`partialOriginPoint: ${partialOriginPoint}`);
// console.log(`partialOriginPoint: ${JSON.stringify(partialOriginPoint)}`);
let readonlyColors = { red: 'red' };
// console.log(`readonlyColors: ${JSON.stringify(readonlyColors)}`);
function changeCoordinate(point, coordinateName, newValue) {
    point[coordinateName] = newValue;
}
changeCoordinate(originPoint, 'x', 5);
console.log(`changed original point coordinate ${JSON.stringify(originPoint)}`);
console.log(originPoint);
let leftLeaf = {
    value: 5
};
let rightLeaf = {
    value: 10
};
let root = {
    value: 3,
    leftChild: leftLeaf,
    rightChild: rightLeaf
};
console.log(root);
class Dog {
    name;
    age;
    constructor(n, a) {
        this.name = n;
        this.age = a;
    }
    makeSound() {
        console.log('bau');
    }
}
const doggie = new Dog('Amu', 2);
doggie.makeSound();
//# sourceMappingURL=demo.js.map