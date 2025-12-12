class BankAccount {
    private balance: number;

    constructor(bal: number) {
        this.balance = bal;
    }

    deposit(amount: number): void {
        this.balance += amount;
    }
    withdraw(amount: number): void {
        if (this.balance <= amount){
            console.warn('The operation cannot be made');
        }else this.balance -= amount;
    }
    getBalance(): number {
        return this.balance
    }
}

// const account = new BankAccount(100);
// account.deposit(50);
// account.withdraw(30);
// console.log(account.getBalance());

const account = new BankAccount(20);
account.withdraw(30);
console.log(account.getBalance());