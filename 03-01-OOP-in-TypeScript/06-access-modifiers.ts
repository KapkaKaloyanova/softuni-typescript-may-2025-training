class Employee {
    public name: string;
    protected position: string;
    private salary: number;

    constructor(name: string, position: string, salary: number) {
        this.name = name;
        this.position = position;
        this.salary = salary;
    }
    getDetais(): string {
        return `Name: ${this.name}, Position: ${this.position}`

    }

    showSalary(): string {
        return `Salary: \$${this.salary}`;

    }
}

const emp = new Employee("Alice", "Manager", 5000);
console.log(emp.getDetais());
console.log(emp.showSalary());
console.log(emp.name);
// console.log(emp.salary);
// console.log(emp.position);



