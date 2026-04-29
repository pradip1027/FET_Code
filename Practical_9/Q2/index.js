"use strict";
/*
 * Q.2. What is setTimeout() method? Explain with the help of an example and explain why we should use setTimeout() method in program.
 *
 * Answer:
 * The setTimeout() method is a Web API (also available in Node.js) that allows you to specify a callback function
 * to be executed after a specified delay, measured in milliseconds. It does NOT block the rest of the code from executing
 * (asynchronous behavior).
 *
 * Why use setTimeout():
 * 1. To delay an operation (like triggering a popup after 5 seconds of an advertisement).
 * 2. To avoid blocking the main thread (simulating asynchronous tasks).
 * 3. Throttling/Debouncing user events (like waiting until a user stops typing to trigger an autocomplete search).
 */
Object.defineProperty(exports, "__esModule", { value: true });
// Example of setTimeout()
console.log("Start: Before setTimeout");
// setTimeout takes a callback function and a delay in milliseconds.
setTimeout(() => {
    // This code runs asynchronously after 2000 milliseconds (2 seconds)
    console.log("Middle: Inside setTimeout! Executed after a 2-second delay.");
}, 2000);
console.log("End: After setTimeout is called... Notice this prints BEFORE the timer finishes.");
//# sourceMappingURL=index.js.map