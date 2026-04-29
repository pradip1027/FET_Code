let numbers = [];

for (let i = 0; i < 10; i++) {
    numbers.push(parseInt(prompt("Enter number " + (i + 1) + ":")));
}

console.log("Array to search:", numbers);
document.write("<h3>Array Elements:</h3>" + numbers.join(", "));

let target = parseInt(prompt("Enter number to search for:"));
let found = false;
let foundIndex = -1;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === target) {
        found = true;
        foundIndex = i;
        break;
    }
}

if (found) {
    let result = "Number " + target + " found at index " + foundIndex;
    console.log(result);
    document.write("<h3>Search Result:</h3>" + result);
} else {
    let result = "Number " + target + " not found in array.";
    console.log(result);
    document.write("<h3>Search Result:</h3>" + result);
}
