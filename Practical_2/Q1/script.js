// --- 1. Direct Initialization Method ---
let x = 30;
let y = 10;
console.log("--- Direct Initialization (x=30, y=10) ---");
console.log("Addition:", x + y);
console.log("Subtraction:", x - y);
console.log("Multiplication:", x * y);
console.log("Division:", x / y);

// --- 2. Indirect Initialization & Switch Case ---
function calculate() {
    // Accessing values using document.formName.componentName.value
    let n1 = parseFloat(document.calcForm.num1.value);
    let n2 = parseFloat(document.calcForm.num2.value);
    let op = document.calcForm.operation.value;
    let result;

    switch (op) {
        case "add":
            result = n1 + n2;
            break;
        case "sub":
            result = n1 - n2;
            break;
        case "mul":
            result = n1 * n2;
            break;
        case "div":
            if (n2 !== 0) {
                result = n1 / n2;
            } else {
                result = "Cannot divide by zero";
            }
            break;
        default:
            result = "Invalid Operation";
    }

    // Displaying using getElementById
    document.getElementById('result-display').innerText = "Result: " + result;
    console.log("Indirect Calculation Result:", result);
}
