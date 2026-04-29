"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swapValues = swapValues;
exports.reverseNumber = reverseNumber;
exports.default = findNetSalary;
// a. Display swap value of two number (Named Export)
function swapValues(a, b) {
    console.log(`Before Swap: a = ${a}, b = ${b}`);
    let temp = a;
    a = b;
    b = temp;
    console.log(`After Swap: a = ${a}, b = ${b}`);
}
// b. Display one five-digit number in reverse order (Named Export)
function reverseNumber(num) {
    const reversedStr = num.toString().split('').reverse().join('');
    return parseInt(reversedStr, 10);
}
// c. Find net salary of an employee (Default Export)
// Assuming net salary is Base Salary + Allowances - Deductions
function findNetSalary(basic, allowances, deductions) {
    return basic + allowances - deductions;
}
//# sourceMappingURL=operations.js.map