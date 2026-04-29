function calculate() {
    let input = document.getElementById('numInput').value;
    let numbers = input.trim().split(/\s+/).map(Number);

    if (numbers.length < 10) {
        alert("Please enter at least 10 numbers.");
        return;
    }

    // Take first 10
    let array = numbers.slice(0, 10);
    let sum = array.reduce((a, b) => a + b, 0);
    let average = sum / array.length;

    document.getElementById('sumOut').innerText = "Sum: " + sum;
    document.getElementById('avgOut').innerText = "Average: " + average;

    console.log("DOM Sum:", sum, "Average:", average);
}
