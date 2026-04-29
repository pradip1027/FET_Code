function countEvenOdd() {
    let input = document.getElementById('numInput').value;
    let numbers = input.trim().split(/\s+/).map(Number);

    if (numbers.length < 10) {
        alert("Please enter at least 10 numbers.");
        return;
    }

    let array = numbers.slice(0, 10);
    let even = array.filter(n => n % 2 === 0).length;
    let odd = array.length - even;

    document.getElementById('evenOut').innerText = "Count of even number: " + even;
    document.getElementById('oddOut').innerText = "Count of odd number: " + odd;

    console.log("DOM Even:", even, "Odd:", odd);
}
