import multiply, { add, subtract } from "./mathUtils";

console.log("--- Demonstrating Module Imports ---");

// Testing Named Exports
console.log("Addition using Named Export (10 + 5):", add(10, 5));
console.log("Subtraction using Named Export (10 - 5):", subtract(10, 5));

// Testing Default Export
console.log("Multiplication using Default Export (10 * 5):", multiply(10, 5));
