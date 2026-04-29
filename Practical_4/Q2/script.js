// Helper to get inputs
function getInputs() {
    const input = document.getElementById('numbersInput').value;
    return input.trim().split(/\s+/).map(Number).slice(0, 10);
}

// 1. Named Function (with parameters)
function calculateNamed(arr) {
    const sum = arr.reduce((a, b) => a + b, 0);
    const avg = sum / arr.length;
    return { sum, avg, type: "Named" };
}

// 2. Arrow Function (with parameters)
const calculateArrow = (arr) => {
    const sum = arr.reduce((a, b) => a + b, 0);
    const avg = sum / arr.length;
    return { sum, avg, type: "Arrow" };
};

// 3. Anonymous Function (with parameters)
const calculateAnonymous = function (arr) {
    const sum = arr.reduce((a, b) => a + b, 0);
    const avg = sum / arr.length;
    return { sum, avg, type: "Anonymous" };
};

// Event Handlers
function displayResult(result) {
    document.getElementById('resText').innerText = `${result.type} Result - Sum: ${result.sum}, Average: ${result.avg}`;
    console.log(`${result.type} Calculation:`, result);
}

function handleNamed() {
    const data = getInputs();
    displayResult(calculateNamed(data));
}

document.getElementById('arrowBtn').addEventListener('click', () => {
    const data = getInputs();
    displayResult(calculateArrow(data));
});

document.getElementById('anonBtn').addEventListener('click', function () {
    const data = getInputs();
    displayResult(calculateAnonymous(data));
});
