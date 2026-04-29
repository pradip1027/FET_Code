import findNetSalary, { swapValues, reverseNumber } from "./operations";

console.log("--- Q.3 TS export functions ---");

// a. Swap Values
console.log("\n[a] Swapping Values:");
swapValues(10, 50);

// b. Reverse five-digit number
console.log("\n[b] Reversing 5-digit number:");
const numToReverse = 12345;
console.log(`Original: ${numToReverse}, Reversed: ${reverseNumber(numToReverse)}`);

// c. Find Net Salary
console.log("\n[c] Finding Net Salary:");
const basicSalary = 50000;
const allowances = 15000;
const deductions = 5000;
const netSalary = findNetSalary(basicSalary, allowances, deductions);
console.log(`Basic: ${basicSalary}, Allowances: ${allowances}, Deductions: ${deductions}`);
console.log(`Net Salary: ${netSalary}`);
