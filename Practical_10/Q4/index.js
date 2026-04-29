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
// Using class and object to store and display Employee information
class Employee {
    eid;
    ename;
    dept;
    post;
    salary;
    constructor(eid, ename, dept, post, salary) {
        this.eid = eid;
        this.ename = ename;
        this.dept = dept;
        this.post = post;
        this.salary = salary;
    }
    displayInfo() {
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
const askQuestion = (query) => {
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
        const emp = new Employee(parseInt(idStr, 10), name, dept, post, parseFloat(salaryStr));
        // Displaying Record
        emp.displayInfo();
    }
    catch (err) {
        console.error("Error reading input:", err);
    }
    finally {
        rl.close();
    }
}
// Start Program
main();
//# sourceMappingURL=index.js.map