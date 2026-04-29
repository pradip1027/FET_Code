"use strict";
/**
 * Q.2. What is module in TypeScript? Explain export function and export default function using program example.
 *
 * Module: A module is a way to group related code and encapsulate variables/functions
 * so they do not pollute the global namespace. Code in one module is available to another
 * using import and export statements.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = add;
exports.subtract = subtract;
exports.default = multiply;
// 1. export function (Named Export)
// You can export multiple named functions from a module. 
// They must be imported using their exact names inside braces {}.
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
// 2. export default function (Default Export)
// You can have ONLY ONE default export per module. 
// When importing, you can assign it any name without using braces {}.
function multiply(a, b) {
    return a * b;
}
//# sourceMappingURL=mathUtils.js.map