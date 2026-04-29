/*
 * Q.1. What is callback function? Explain with the help of an appropriate program example.
 * 
 * Answer:
 * A callback function is a function passed into another function as an argument, which is then invoked 
 * inside the outer function to complete some kind of routine or action. Callbacks are often used 
 * to handle asynchronous operations, allowing code to execute after a task has completed, 
 * or to customize the behavior of generic functions (like arrays' map, filter, etc.).
 */

// Example of a Callback Function:

// 1. Defining a function that takes another function (the callback) as an argument
function greetUser(name: string, callback: (message: string) => void): void {
    console.log(`Processing greeting for user: ${name}...`);
    
    // Simulate some logic before calling the callback
    const greetingMessage = `Hello, ${name}! Welcome to Practical 9.`;
    
    // 2. Invoking the callback function
    callback(greetingMessage);
}

// 3. Defining the actual callback to be passed
function logGreeting(message: string): void {
    console.log(`[Callback Executed]: ${message}`);
}

// 4. Calling the main function and passing the callback
greetUser("Pradip", logGreeting);
