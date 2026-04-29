function findLowest() {
    let n1 = parseFloat(document.getElementById('val1').value);
    let n2 = parseFloat(document.getElementById('val2').value);
    let n3 = parseFloat(document.getElementById('val3').value);

    // Using nested ternary operations
    let lowest = (n1 < n2) ? ((n1 < n3) ? n1 : n3) : ((n2 < n3) ? n2 : n3);

    document.getElementById('output').innerText = "Lowest Number: " + lowest;
    console.log("Lowest of (" + n1 + ", " + n2 + ", " + n3 + ") is " + lowest);
}
