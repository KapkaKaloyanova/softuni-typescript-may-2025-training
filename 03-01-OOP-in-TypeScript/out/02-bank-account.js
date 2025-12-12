"use strict";
class BankAccount {
    balance;
    constructor(bal) {
        this.balance = bal;
    }
    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        if (this.balance <= amount) {
            console.warn('The operation cannot be made');
        }
        else
            this.balance -= amount;
    }
    getBalance() {
        return this.balance;
    }
}
// const account = new BankAccount(100);
// account.deposit(50);
// account.withdraw(30);
// console.log(account.getBalance());
const account = new BankAccount(20);
account.withdraw(30);
console.log(account.getBalance());
//# sourceMappingURL=02-bank-account.js.map