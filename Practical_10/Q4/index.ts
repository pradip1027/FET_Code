import * as readline from 'readline';

// Using class and object to store and display Employee information
class Employee {
    constructor(
        public eid: number,
        public ename: string,
        public dept: string,
        public post: string,
        public salary: number
    ) {}

    displayInfo(): void {
        console.log("\n=========================");
        console.log("    Employee Details     ");
        console.log("=========================");
        console.log(`ID     : ${this.eid}`);
        console.log(`Name   : ${this.ename}`);
        console.log(`Dept   : ${this.dept}`);
        console.log(`Post   : ${this.post}`);
        console.log(`Salary : $${this.salary}`);
        console.log("=========================\n");
    }
}

// Setup input stream using generic Node.js readline module
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Helper function to return Promise making it easier to read synchronously
const askQuestion = (query: string): Promise<string> => {
    return new Promise((resolve) => rl.question(query, resolve));
};

async function main() {
    console.log("Please enter Employee Information:");
    try {
        const idStr = await askQuestion("Enter Employee ID: ");
        const name = await askQuestion("Enter Employee Name: ");
        const dept = await askQuestion("Enter Department: ");
        const post = await askQuestion("Enter Post: ");
        const salaryStr = await askQuestion("Enter Salary: ");

        // Creating Object of Employee Class
        const emp = new Employee(
            parseInt(idStr, 10),
            name,
            dept,
            post,
            parseFloat(salaryStr)
        );

        // Displaying Record
        emp.displayInfo();
    } catch (err) {
        console.error("Error reading input:", err);
    } finally {
        rl.close();
    }
}

// Start Program
main();
