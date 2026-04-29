/*
 * Q.5. What is promise in TypeScript? Explain resolve, reject and delay state of promises with an appropriate program example.
 * 
 * Answer:
 * A Promise is an object representing the eventual completion (or failure) of an asynchronous operation. 
 * It's a placeholder for a value that we don't have yet but expect to get after some async work completes.
 * 
 * Promises have three states:
 * 1. Pending (Delay State): The initial state when the Promise is executing and neither resolved nor rejected.
 * 2. Resolved (Fulfilled): The operation completed successfully. We call resolve().
 * 3. Rejected: The operation failed. We call reject().
 */

function makePromise(success: boolean): Promise<string> {
    console.log("Promise State: [Pending] (Doing some async work...)");
    
    return new Promise((resolve, reject) => {
        // Simulating the delay (pending state)
        setTimeout(() => {
            if (success) {
                // If it succeeds, we resolve the Promise.
                resolve("Data fetched successfully! State: [Resolved]");
            } else {
                // If it fails, we reject the Promise.
                reject("Error fetching data! State: [Rejected]");
            }
        }, 2000);
    });
}

console.log("--- Example: Successful Promise ---");
// This will resolve
makePromise(true)
    .then((result) => console.log(result))   // .then handles resolve
    .catch((error) => console.error(error))  // .catch handles reject
    .finally(() => {
        console.log("--- Example: Failed Promise ---");
        // This will reject
        makePromise(false)
            .then((result) => console.log(result))
            .catch((error) => console.error(error));
    });
