import * as readline from 'readline';

// 1. Defining the Interface for Bank Account
interface IBankAccount {
    accountNumber: string;
    accountHolderName: string;
    deposit(amount: number): void;
    withdraw(amount: number): void;
    checkBalance(): void;
}

// 2. Creating a class that implements the Interface
class BankAccount implements IBankAccount {
    public accountNumber: string;
    public accountHolderName: string;
    private balance: number;

    constructor(accountNumber: string, accountHolderName: string, initialDeposit: number) {
        this.accountNumber = accountNumber;
        this.accountHolderName = accountHolderName;
        this.balance = initialDeposit >= 0 ? initialDeposit : 0;
        console.log(`\n✅ Account created successfully for ${this.accountHolderName}.`);
    }

    deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
            console.log(`\n💵 Deposited $${amount.toFixed(2)}. New balance is $${this.balance}.`);
        } else {
            console.log("\n❌ Deposit amount must be positive.");
        }
    }

    withdraw(amount: number): void {
        if (amount <= 0) {
            console.log("\n❌ Withdrawal amount must be positive.");
        } else if (amount > this.balance) {
            console.log(`\n❌ Insufficient balance! Current Balance: $${this.balance}.`);
        } else {
            this.balance -= amount;
            console.log(`\n💸 Withdrew $${amount.toFixed(2)}. New balance is $${this.balance}.`);
        }
    }

    checkBalance(): void {
        console.log(`\n💰 Current Balance for account [${this.accountNumber}]: $${this.balance}`);
    }
}

// Interactive Console application using Readline
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const askQuestion = (query: string): Promise<string> => new Promise((resolve) => rl.question(query, resolve));

async function main() {
    console.log("===================================");
    console.log("    Welcome to the Banking App     ");
    console.log("===================================");

    try {
        console.log("\n--- [a] Create Account ---");
        const accNo = await askQuestion("Enter new Account Number: ");
        const accName = await askQuestion("Enter Account Holder Name: ");
        const initDepositStr = await askQuestion("Enter Initial Deposit Amount: ");
        
        let initialDeposit = parseFloat(initDepositStr);
        if (isNaN(initialDeposit)) initialDeposit = 0;

        // Creating Object of BankAccount class
        const myAccount = new BankAccount(accNo, accName, initialDeposit);

        let exit = false;
        while (!exit) {
            console.log("\n-----------------------------------");
            console.log("             MAIN MENU             ");
            console.log("-----------------------------------");
            console.log("1. [b] Deposit Amount");
            console.log("2. [c] Withdraw Amount");
            console.log("3. [d] Check Balance");
            console.log("4. Exit");
            const choice = await askQuestion("Select an option (1-4): ");

            switch(choice.trim()) {
                case '1':
                    const depStr = await askQuestion("Enter amount to deposit: ");
                    myAccount.deposit(parseFloat(depStr));
                    break;
                case '2':
                    const withStr = await askQuestion("Enter amount to withdraw: ");
                    myAccount.withdraw(parseFloat(withStr));
                    break;
                case '3':
                    myAccount.checkBalance();
                    break;
                case '4':
                    console.log("\nThank you for using our banking services. Goodbye!");
                    exit = true;
                    break;
                default:
                    console.log("\n❌ Invalid choice. Please select 1, 2, 3, or 4.");
            }
        }
    } catch (err) {
        console.error("Error:", err);
    } finally {
        rl.close();
    }
}

main();
