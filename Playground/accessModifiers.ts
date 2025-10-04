class BankAccount {
    private accountNumber: string;
    private balance: number;

    constructor(accountNumber: string, balance: number) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    public deposit(amount: number): void {
        this.balance += amount;
    }

    public getBalance(): number {
        return this.balance;
    }
}

const account = new BankAccount('12345', 1000);
account.deposit(500);
console.log(account.getBalance()); // 1500
// console.log(account.balance); // Error: 'balance' is private