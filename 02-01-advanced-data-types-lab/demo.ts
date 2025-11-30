//! Union type
function printGreeting(text: string | string[]): void {
    if (typeof text === 'string') {
        console.log(text);

    } else {
        console.log(text.join(' '));
    }

}

printGreeting('hello, Kapka');
printGreeting(['Hello', 'its', 'me']);

//! String/numeric literal type
let passFailGrade: 'pass' | 'fail';
passFailGrade = 'pass';
console.log(passFailGrade);

let numericGrade: 2 | 3 | 4 | 5 | 6;
numericGrade = 3;
numericGrade = 6;
// numericGrade= 1;

//! Custom types + Itersection type
type Person = {
    firstName: string;
    lastName: string;
    age: number;
}

type StudenProfile = {
    gpa: number;
    school: string;
}

type FullStudent = Person & StudenProfile;

function printStudentProfile(student: FullStudent) {
    console.log(`Student: ${student.firstName} ${student.lastName}, GPA: ${student.gpa}`);

}

let pen4oPerson: FullStudent = {
    firstName: 'Pen4o',
    lastName: 'Strahilov',
    age: 17,
    school: 'SMG',
    gpa: 5.5
}

let min4oPerson: Person = {
    firstName: 'Min4o',
    lastName: 'Daskalov',
    age: 30
}
printStudentProfile(pen4oPerson);
// printStudentProfile(min4oPerson);

//! keyof type
type Point = {
    x: number;
    y: number;
}

// type KeyOfPoint = keyof Point; // x | y but you cannot log types 
// console.log(KeyOfPoint); // you cannot print types as values
type Colors = {
    red: string;
    blue: string;
}
//! Mapped Types
type PartialPoint = {
    [K in keyof Point]?: Point[K];
};

type ReadonlyColors = {
    readonly [K in keyof Colors]?: Colors[K]
};

let originPoint: Point = {
    x: 0,
    y: 0
};
// console.log(`origin point: ${originPoint}`); // taka otechatwa samo strukturata 
// console.log(`origin point: ${JSON.stringify(originPoint)}`); // za da otpechata stojnostta na obekta
// console.log(originPoint);


let color: Colors = { red: 'cherven', blue: 'sin' }

console.log(`color: ${JSON.stringify(color)}`);

let partialOriginPoint: PartialPoint = {
    x: 5,
    y: 1,
}
// console.log(`partialOriginPoint: ${partialOriginPoint}`);
// console.log(`partialOriginPoint: ${JSON.stringify(partialOriginPoint)}`);

let readonlyColors: ReadonlyColors = { red: 'red' }
// console.log(`readonlyColors: ${JSON.stringify(readonlyColors)}`);

function changeCoordinate(point: Point, coordinateName: keyof Point, newValue: number) {
    point[coordinateName] = newValue;
}

changeCoordinate(originPoint, 'x', 5);
console.log(`changed original point coordinate ${JSON.stringify(originPoint)}`);
console.log(originPoint);


//! Recursive Types
type TreeNode = {
    value: number;
    leftChild?: TreeNode;
    rightChild?: TreeNode;
}

let leftLeaf: TreeNode = {
    value: 5
}

let rightLeaf: TreeNode = {
    value: 10
}

let root: TreeNode = {
    value: 3,
    leftChild: leftLeaf,
    rightChild: rightLeaf
}
console.log(root);




//! Interfaces + classes

interface Animal {
    name: string;
    age:number;
    makeSound(soundName: string): void;
}

class Dog implements Animal{
    public name: string;
    public age: number;

    constructor(n: string, a: number){
        this.name = n;
        this.age = a;
    }

    makeSound(): void{
        console.log('bau');
        
    }
}

const doggie = new Dog('Amu', 2);
doggie.makeSound();

//! Interface Extension (extends) = analogical to type intersection (&)
interface Person1 {
    id: number;
    firstName: string;
    lastName: string;
    age?: number;
}

interface StudentProfile1 extends Person1 {
    school: string;
    gpa: number;
}