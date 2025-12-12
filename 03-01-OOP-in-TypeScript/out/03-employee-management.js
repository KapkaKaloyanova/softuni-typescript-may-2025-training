class Employee {
    name;
    constructor(name) {
        this.name = name;
    }
}
class Manager extends Employee {
    baseSalary;
    bonus = 10000;
    constructor(name, baseSalary) {
        super(name);
        this.baseSalary = baseSalary;
    }
    calculateAnnualSalary() {
        let annualSalary = this.baseSalary + this.bonus;
        return annualSalary;
    }
    getSalaryDetails() {
        return `${this.name} (Manager): \$${this.baseSalary} + \$${this.bonus} = \$${this.calculateAnnualSalary()} annual salary`;
    }
}
class Developer extends Employee {
    baseSalary;
    projectBonus;
    constructor(name, baseSalary, projectBonus) {
        super(name);
        this.baseSalary = baseSalary;
        this.projectBonus = projectBonus;
    }
    calculateAnnualSalary() {
        return this.baseSalary + this.projectBonus;
    }
    getSalaryDetails() {
        return `${this.name} (Developer): \$${this.baseSalary} + \$${this.projectBonus} = \$${this.calculateAnnualSalary()} annual salary`;
    }
}
const employee1 = new Manager('Anna', 50000);
const employee2 = new Developer('Peter', 40000, 5000);
const employees = [employee1, employee2];
let totalPayroll = 0;
for (const employee of employees) {
    totalPayroll += employee.calculateAnnualSalary();
}
console.log(employee1.getSalaryDetails());
console.log(employee2.getSalaryDetails());
console.log(`Total Payroll: \$${totalPayroll}`);
export {};
//# sourceMappingURL=03-employee-management.js.map