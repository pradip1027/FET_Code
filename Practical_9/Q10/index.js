"use strict";
/*
 * Q.10. Create a TypeScript program to perform division of two numbers using a Promise.
 * Handle errors (like division by zero) using async and await with try...catch.
 */
Object.defineProperty(exports, "__esModule", { value: true });
// Function calculating division and returning a promise
function divideNumbers(numerator, denominator) {
    return new Promise((resolve, reject) => {
        if (denominator === 0) {
            reject(new Error("Mathematical Error: Division by zero is not allowed."));
        }
        else {
            resolve(numerator / denominator);
        }
    });
}
// Function using async/await and try/catch block
async function performDivisionTask(num1, num2) {
    console.log(`Attempting to divide ${num1} by ${num2}...`);
    try {
        // Pausing execution until divideNumbers resolves
        // If it rejects, control immediately shifts to the catch block
        const result = await divideNumbers(num1, num2);
        console.log(`[SUCCESS] The result of ${num1} / ${num2} is: ${result}`);
    }
    catch (error) {
        // Handling the error using the try...catch block mechanism wrapper for async code
        console.error(`[ERROR CAUGHT] ${error.message}`);
    }
    finally {
        console.log(`Execution context for division ${num1}/${num2} finished.\n`);
    }
}
async function runDivisionTests() {
    // Valid division
    await performDivisionTask(50, 5);
    // Invalid division (Division by Zero)
    await performDivisionTask(50, 0);
}
runDivisionTests();
//# sourceMappingURL=index.js.map