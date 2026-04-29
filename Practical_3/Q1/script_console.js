let numbers = [];
let sum = 0;

for (let i = 0; i < 10; i++) {
    let num = parseFloat(prompt("Enter number " + (i + 1) + ":"));
    numbers.push(num);
    sum += num;
}

let average = sum / numbers.length;

console.log("Numbers entered:", numbers);
console.log("Sum:", sum);
console.log("Average:", average);

document.write("<h3>Output:</h3>");
document.write("Numbers: " + numbers.join(", ") + "<br>");
document.write("Sum: " + sum + "<br>");
document.write("Average: " + average);
