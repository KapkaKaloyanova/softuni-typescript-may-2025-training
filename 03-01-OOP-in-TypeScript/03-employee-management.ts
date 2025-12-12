export { };

abstract class Employee {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    abstract calculateAnnualSalary(): number;
    abstract getSalaryDetails(): string;
}

class Manager extends Employee {
    baseSalary: number;
    bonus: number = 10000;

    constructor(name: string, baseSalary: number) {
        super(name);
        this.baseSalary = baseSalary;
    }
    calculateAnnualSalary(): number {
        let annualSalary = this.baseSalary + this.bonus;
        return annualSalary;
    }
    getSalaryDetails(): string {
        return `${this.name} (Manager): \$${this.baseSalary} + \$${this.bonus} = \$${this.calculateAnnualSalary()} annual salary`;
    }
}

class Developer extends Employee {
    baseSalary: number;
    projectBonus: number;

    constructor(name: string, baseSalary: number, projectBonus: number) {
        super(name);
        this.baseSalary = baseSalary;
        this.projectBonus = projectBonus;

    }

    calculateAnnualSalary(): number {
        return this.baseSalary + this.projectBonus;
    }
    getSalaryDetails(): string {
        return `${this.name} (Developer): \$${this.baseSalary} + \$${this.projectBonus} = \$${this.calculateAnnualSalary()} annual salary`;
    }
}

const employee1 = new Manager('Anna', 50000);
const employee2 = new Developer('Peter', 40000, 5000);
const employees: Employee[] = [employee1, employee2];

let totalPayroll = 0;
for (const employee of employees) {
    totalPayroll += employee.calculateAnnualSalary()
}
console.log(employee1.getSalaryDetails());
console.log(employee2.getSalaryDetails());

console.log(`Total Payroll: \$${totalPayroll}`);
