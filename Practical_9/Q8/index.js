"use strict";
/*
 * Q.8. Write a TypeScript program that creates a Promise to check whether a number is even or odd.
 * Use async and await to handle the result.
 */
Object.defineProperty(exports, "__esModule", { value: true });
// A function returning a Promise that resolves for Even, and rejects for Odd
function checkEvenOrOdd(num) {
    return new Promise((resolve, reject) => {
        if (num % 2 === 0) {
            resolve(`SUCCESS: The number ${num} is Even.`);
        }
        else {
            reject(`ERROR: The number ${num} is Odd.`);
        }
    });
}
// Applying async/await to handle the response
async function handleEvenOddCheck(num) {
    console.log(`Checking number: ${num}...`);
    try {
        // await pauses execution until checkEvenOrOdd resolves (even) or fails (odd)
        const successMessage = await checkEvenOrOdd(num);
        console.log(successMessage);
    }
    catch (errorMessage) {
        // if the promise rejected, execution drops into the catch block
        console.error(errorMessage);
    }
}
// Main execution block wrapping the async calls
async function runChecks() {
    // Check an Even number
    await handleEvenOddCheck(10);
    console.log("------------------------");
    // Check an Odd number
    await handleEvenOddCheck(7);
}
runChecks();
//# sourceMappingURL=index.js.map