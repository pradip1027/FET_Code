// a. Display swap value of two number (Named Export)
export function swapValues(a: number, b: number): void {
    console.log(`Before Swap: a = ${a}, b = ${b}`);
    let temp = a;
    a = b;
    b = temp;
    console.log(`After Swap: a = ${a}, b = ${b}`);
}

// b. Display one five-digit number in reverse order (Named Export)
export function reverseNumber(num: number): number {
    const reversedStr = num.toString().split('').reverse().join('');
    return parseInt(reversedStr, 10);
}

// c. Find net salary of an employee (Default Export)
// Assuming net salary is Base Salary + Allowances - Deductions
export default function findNetSalary(basic: number, allowances: number, deductions: number): number {
    return basic + allowances - deductions;
}
