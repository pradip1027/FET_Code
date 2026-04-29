"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function findHighest() {
    let num1;
    let num2;
    let num3;
    num1 = Number(document.getElementById("num1").value);
    num2 = Number(document.getElementById("num2").value);
    num3 = Number(document.getElementById("num3").value);
    let highest;
    if (num1 > num2 && num1 > num3) {
        highest = num1;
        document.getElementById("highest").innerHTML = "Highest number is: " + highest;
    }
    else if (num2 > num1 && num2 > num3) {
        highest = num2;
        document.getElementById("highest").innerHTML = "Highest number is: " + highest;
    }
    else if (num3 > num1 && num3 > num2) {
        highest = num3;
        document.getElementById("highest").innerHTML = "Highest number is: " + highest;
    }
    else {
        document.getElementById("highest").innerHTML = "All numbers are equal";
    }
}
//# sourceMappingURL=script.js.map