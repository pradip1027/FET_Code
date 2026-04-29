function calculateMatrix() {
    let inputs = document.getElementsByClassName('matrix-input');
    let matrix = [[], [], []];
    let sum = 0;

    for (let i = 0; i < 9; i++) {
        let val = parseInt(inputs[i].value) || 0;
        let row = Math.floor(i / 3);
        matrix[row].push(val);
        sum += val;
    }

    let avg = sum / 9;

    document.getElementById('sum').innerText = "Sum: " + sum;
    document.getElementById('avg').innerText = "Average: " + avg.toFixed(2);

    console.log("Matrix:", matrix);
    console.log("Sum:", sum, "Avg:", avg);
}
