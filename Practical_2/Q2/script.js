function findHighest() {
    let a = parseFloat(document.getElementById('n1').value);
    let b = parseFloat(document.getElementById('n2').value);
    let c = parseFloat(document.getElementById('n3').value);
    let highest;

    if (a >= b && a >= c) {
        highest = a;
    } else if (b >= a && b >= c) {
        highest = b;
    } else {
        highest = c;
    }

    document.getElementById('output').innerText = "Highest Number: " + highest;
    console.log("Highest of (" + a + ", " + b + ", " + c + ") is " + highest);
}
