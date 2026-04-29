/// <reference types="node" />
/*
 * Q.3. Read two numbers from the user... calculate addition, subtraction, multiplication, and division 
 * using callback function and setTimeout() method separately.
 */
const readline = require('readline');

// Setup readline interface for reading from command line
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Part A: Using Callback Functions
function calculateWithCallback(num1: number, num2: number, operation: string, callback: (result: number) => void): void {
    let res: number = 0;
    if (operation === 'add') res = num1 + num2;
    else if (operation === 'sub') res = num1 - num2;
    else if (operation === 'mul') res = num1 * num2;
    else if (operation === 'div') res = num1 / num2;

    // Passing the result cleanly to the callback
    callback(res);
}

// Part B: Using setTimeout
function calculateWithSetTimeout(num1: number, num2: number, operation: string): void {
    // We delay the actual calculation entirely by 1000 ms to simulate an async math engine
    setTimeout(() => {
        let res: number = 0;
        if (operation === 'add') res = num1 + num2;
        else if (operation === 'sub') res = num1 - num2;
        else if (operation === 'mul') res = num1 * num2;
        else if (operation === 'div') res = num1 / num2;

        console.log(`[Async setTimeout] => ${operation.toUpperCase()} result is: ${res}`);
    }, 1000);
}

// Ask user iteratively
rl.question('Enter First Number: ', (input1: string) => {
    rl.question('Enter Second Number: ', (input2: string) => {
        const n1 = parseFloat(input1);
        const n2 = parseFloat(input2);

        if (isNaN(n1) || isNaN(n2)) {
            console.error("Invalid numbers entered. Please run again.");
            rl.close();
            return;
        }

        console.log(`\n--- 1. Using CALLBACK FUNCTIONS ---`);
        calculateWithCallback(n1, n2, 'add', (res) => console.log(`[Callback] => ADDITION is: ${res}`));
        calculateWithCallback(n1, n2, 'sub', (res) => console.log(`[Callback] => SUBTRACTION is: ${res}`));
        calculateWithCallback(n1, n2, 'mul', (res) => console.log(`[Callback] => MULTIPLICATION is: ${res}`));
        calculateWithCallback(n1, n2, 'div', (res) => console.log(`[Callback] => DIVISION is: ${res}`));

        console.log(`\n--- 2. Using setTimeout() ---`);
        console.log(`Waiting 1 second for asynchronous results...`);
        calculateWithSetTimeout(n1, n2, 'add');
        calculateWithSetTimeout(n1, n2, 'sub');
        calculateWithSetTimeout(n1, n2, 'mul');
        calculateWithSetTimeout(n1, n2, 'div');

        // We close the interface after 2 seconds to ensure setTimeouts have printed out
        setTimeout(() => {
            console.log("\nClosing interface.");
            rl.close();
        }, 2000);
    });
});
