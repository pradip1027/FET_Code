"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
class Student {
    rno;
    name;
    course;
    branch;
    fee;
    contact;
    constructor(rno, name, course, branch, fee, contact) {
        this.rno = rno;
        this.name = name;
        this.course = course;
        this.branch = branch;
        this.fee = fee;
        this.contact = contact;
    }
    displayRecord() {
        console.log(`${this.rno}\t| ${this.name.padEnd(10)}\t| ${this.course}\t| ${this.branch}\t| $${this.fee}\t| ${this.contact}`);
    }
}
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const askQuestion = (query) => {
    return new Promise((resolve) => rl.question(query, resolve));
};
async function main() {
    const students = [];
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
            const student = new Student(parseInt(rnoStr, 10), name, course, branch, parseFloat(feeStr), contact);
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
    }
    catch (err) {
        console.error("Error reading input:", err);
    }
    finally {
        rl.close();
    }
}
main();
//# sourceMappingURL=index.js.map