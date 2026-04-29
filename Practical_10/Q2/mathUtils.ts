/**
 * Q.2. What is module in TypeScript? Explain export function and export default function using program example.
 * 
 * Module: A module is a way to group related code and encapsulate variables/functions 
 * so they do not pollute the global namespace. Code in one module is available to another
 * using import and export statements.
 */

// 1. export function (Named Export)
// You can export multiple named functions from a module. 
// They must be imported using their exact names inside braces {}.
export function add(a: number, b: number): number {
    return a + b;
}

export function subtract(a: number, b: number): number {
    return a - b;
}

// 2. export default function (Default Export)
// You can have ONLY ONE default export per module. 
// When importing, you can assign it any name without using braces {}.
export default function multiply(a: number, b: number): number {
    return a * b;
}
