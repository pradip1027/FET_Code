import * as readline from 'readline';

class Student {
    constructor(
        public rno: number,
        public name: string,
        public course: string,
        public branch: string,
        public fee: number,
        public contact: string
    ) {}

    displayRecord(): void {
        console.log(`${this.rno}\t| ${this.name.padEnd(10)}\t| ${this.course}\t| ${this.branch}\t| $${this.fee}\t| ${this.contact}`);
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const askQuestion = (query: string): Promise<string> => {
    return new Promise((resolve) => rl.question(query, resolve));
};

async function main() {
    const students: Student[] = [];
    const NUM_RECORDS = 5;

    console.log(`\n--- Enter Details for ${NUM_RECORDS} Students ---`);

    try {
        for (let i = 1; i <= NUM_RECORDS; i++) {
            console.log(`\n> Student ${i}:`);
            const rnoStr = await askQuestion("Roll No: ");
            const name = await askQuestion("Name: ");
            const course = await askQuestion("Course: ");
            const branch = await askQuestion("Branch: ");
            const feeStr = await askQuestion("Fee: ");
            const contact = await askQuestion("Contact No: ");

            const student = new Student(
                parseInt(rnoStr, 10),
                name,
                course,
                branch,
                parseFloat(feeStr),
                contact
            );
            students.push(student);
        }

        console.log("\n\n==========================================================================");
        console.log("                           All Student Records                             ");
        console.log("==========================================================================");
        console.log("RNo\t| Name      \t| Course\t| Branch\t| Fee   \t| Contact");
        console.log("--------------------------------------------------------------------------");
        for (const std of students) {
            std.displayRecord();
        }
        console.log("==========================================================================\n");

    } catch (err) {
        console.error("Error reading input:", err);
    } finally {
        rl.close();
    }
}

main();
