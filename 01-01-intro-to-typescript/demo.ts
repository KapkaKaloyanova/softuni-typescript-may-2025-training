let firstName: string = 'Pencho';
let lastName: string = 'Ivanov';
let age: number = 30;
let hasGraduated: boolean = false;
let skills: string[] = ['JS', 'HTML', 'TS'];
let certificateInfo: [string, number, boolean] = [
    'MySql',
    2025,
    true
];

let stNumArr: (string | number)[] = ['pen4o', 45];



enum DaysOfWeek {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}


enum Directions {
    Up,
    Down,
    Left,
    Right
}
function movePoint(point: { x: number, y: number }, moveDirection: Directions) {
    if (moveDirection === Directions.Up) {
        return { x: point.x, y: point.y + 1 };

    } else if (moveDirection === Directions.Down) {
        return { x: point.x, y: point.y - 1 };
    } else if (moveDirection === Directions.Right) {
        return { x: point.x + 1, y: point.y };
    } else if (moveDirection === Directions.Left) {
        return { x: point.x - 1, y: point.y };
    }
}

let point = { x: 0, y: 0 };
console.log(movePoint(point, Directions.Left));


function greetUser(username: string, addHello?: boolean) : string {
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
function isNumber(val: string | number): val is number {
    return typeof val === 'number';
}

function formatData(a: string | number, b: string | number) {
    if (isNumber(a) && isNumber(b)) {
        console.log(a + b);
    } else {
        console.log(`${a} <-> ${b}`);
    }
}
formatData('5', '8')