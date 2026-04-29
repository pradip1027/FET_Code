/*
 * Q.9. Develop a TypeScript program that simulates fetching user data using a Promise 
 * (with a delay using setTimeout). Use then(), catch(), and finally() methods to handle the response.
 */

// Interface defining what User data looks like
interface User {
    id: number;
    username: string;
    email: string;
}

// Function simulating fetching data from an API
function fetchUserData(userId: number): Promise<User> {
    console.log(`[Fetching Data] Sending request to fetch user ID: ${userId}...`);

    return new Promise((resolve, reject) => {
        // Simulating the network lag
        setTimeout(() => {
            // Suppose ID 1 is the only valid user in our "database"
            if (userId === 1) {
                const user: User = {
                    id: 1,
                    username: "pradip_dev",
                    email: "pradip@example.com"
                };
                resolve(user); // Success
            } else {
                reject(new Error(`User with ID ${userId} not found in the database.`)); // Failure
            }
        }, 2500); // 2.5 seconds delay
    });
}

// Handling the promise for Valid User
console.log("--- TEST 1: Fetching Valid User (ID: 1) ---");
fetchUserData(1)
    .then((data: User) => {
        // Code executed upon success (resolve)
        console.log("-> [SUCCESS] Downloaded User Data: ", data);
    })
    .catch((error: Error) => {
        // Code executed upon failure (reject)
        console.error("-> [ERROR] Failed to fetch data: ", error.message);
    })
    .finally(() => {
        // Code executed no matter what happens
        console.log("-> [FINALLY] Network operation for ID 1 is complete! Resetting UI load spinner.");
        
        console.log("\n--- TEST 2: Fetching Invalid User (ID: 99) ---");
        fetchUserData(99)
            .then((data: User) => {
                console.log("-> [SUCCESS] Downloaded User Data: ", data);
            })
            .catch((error: Error) => {
                console.error("-> [ERROR] Failed to fetch data: ", error.message);
            })
            .finally(() => {
                console.log("-> [FINALLY] Network operation for ID 99 is complete! Resetting UI load spinner.");
            });
    });
