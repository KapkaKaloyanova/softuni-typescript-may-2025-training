function formatPerson(person: [string, number]): string {
    return `Hello, my name is ${person[0]} and my age is ${person[1]}` ;
}

console.log(formatPerson(['Kapka', 49]));
// console.log(formatPerson(['Ivan', 1, 'Kapka']));
// console.log(formatPerson([]));