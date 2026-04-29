let numbers = [];

for (let i = 0; i < 10; i++) {
    numbers.push(parseInt(prompt("Enter number " + (i + 1) + ":")));
}

console.log("Original Array:", numbers);
document.write("<h3>Original Array:</h3>" + numbers.join(", "));

let index = parseInt(prompt("Enter index to delete (0-9):"));

if (index >= 0 && index < numbers.length) {
    numbers.splice(index, 1);
    console.log("Updated Array:", numbers);
    document.write("<h3>Updated Array (Index " + index + " removed):</h3>" + numbers.join(", "));
} else {
    alert("Invalid Index!");
    console.log("Invalid index provided.");
}
