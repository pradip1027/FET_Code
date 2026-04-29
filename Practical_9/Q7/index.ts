/*
 * Q.7. What are async and await keywords in TypeScript? Explain their use and implementation 
 * with an appropriate program example.
 * 
 * Answer:
 * - async: The `async` keyword is used to declare a function asynchronous. It ensures that the function 
 *          always returns a Promise. If the function returns a literal value, TS wraps it in a resolved Promise.
 * 
 * - await: The `await` keyword can only be used inside an `async` function. It pauses the execution 
 *          of the `async` function and waits for the Promise to resolve or reject before continuing. 
 *          This makes asynchronous code look and behave a bit more like synchronous code, making it easier to read.
 */

// A simple promise-based function returning a delayed greeting
function delayedGreeting(name: string): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Hello, ${name}! It's nice to meet you.`);
        }, 1500);
    });
}

// 1. We declare this function 'async'
async function sayHelloWorkflow() {
    console.log("Workflow starting...");

    // 2. We use 'await' to pause execution until delayedGreeting Promise resolves
    const greetingMsg = await delayedGreeting("Pradip");
    
    // This line won't run until the 1.5-second timeout finishes
    console.log("[Received]:", greetingMsg);
    
    console.log("Workflow complete.");
}

// Invoke the async workflow
sayHelloWorkflow();
