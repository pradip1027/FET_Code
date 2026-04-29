function calculateStats() {
    let input = document.getElementById('numbersInput').value;
    // Parsing numbers from string
    let nums = input.split(/[ ,]+/).map(Number);

    if (nums.length < 10) {
        alert("Please enter at least 10 numbers.");
        return;
    }

    // Take only first 10
    nums = nums.slice(0, 10);

    let sum = 0;
    let highest = nums[0];
    let lowest = nums[0];

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (nums[i] > highest) highest = nums[i];
        if (nums[i] < lowest) lowest = nums[i];
    }

    let avg = sum / nums.length;

    // 1. Console Output
    console.log("--- Statistics for 10 Numbers ---");
    console.log("Numbers:", nums);
    console.log("Sum:", sum);
    console.log("Average:", avg);
    console.log("Highest:", highest);
    console.log("Lowest:", lowest);

    // 2. Document/DOM Output
    document.getElementById('sum-out').innerText = "Sum: " + sum;
    document.getElementById('avg-out').innerText = "Average: " + avg;
    document.getElementById('high-out').innerText = "Highest: " + highest;
    document.getElementById('low-out').innerText = "Lowest: " + lowest;
}
