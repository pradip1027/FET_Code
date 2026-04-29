let numbers = [];
let evenCount = 0;
let oddCount = 0;

for (let i = 0; i < 10; i++) {
    let num = parseInt(prompt("Enter number " + (i + 1) + ":"));
    numbers.push(num);
    if (num % 2 === 0) {
        evenCount++;
    } else {
        oddCount++;
    }
}

console.log("Numbers entered:", numbers);
console.log("Count of even numbers:", evenCount);
console.log("Count of odd numbers:", oddCount);

document.write("<h3>Output:</h3>");
document.write("Numbers: " + numbers.join(", ") + "<br>");
document.write("Even Count: " + evenCount + "<br>");
document.write("Odd Count: " + oddCount);
