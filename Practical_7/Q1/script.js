"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculate() {
    // Indirect Initialization 
    let num1;
    let num2;
    let choice;
    let result = 0;
    // Taking values from user 
    num1 = Number(document.getElementById("num1").value);
    num2 = Number(document.getElementById("num2").value);
    choice = Number(document.getElementById("choice").value);
    // Switch Case 
    switch (choice) {
        case 1:
            result = num1 + num2;
            break;
        case 2:
            result = num1 - num2;
            break;
        case 3:
            result = num1 * num2;
            break;
        case 4:
            if (num2 != 0) {
                result = num1 / num2;
            }
            else {
                alert("Cannot divide by zero");
                return;
            }
            break;
        default:
            alert("Invalid Choice");
            return;
    } // Display result
    document.getElementById("result").value = result.toString();
}
//# sourceMappingURL=script.js.map