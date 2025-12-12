"use strict";
class Employee {
    name;
    position;
    salary;
    constructor(name, position, salary) {
        this.name = name;
        this.position = position;
        this.salary = salary;
    }
    getDetais() {
        return `Name: ${this.name}, Position: ${this.position}`;
    }
    showSalary() {
        return `Salary: \$${this.salary}`;
    }
}
const emp = new Employee("Alice", "Manager", 5000);
console.log(emp.getDetais());
console.log(emp.showSalary());
console.log(emp.name);
// console.log(emp.salary);
// console.log(emp.position);
//# sourceMappingURL=06-access-modifiers.js.map