function performSwap() {
    // Sam's Method: Using a third variable
    let x = 10;
    let y = 20;
    let temp = x;
    x = y;
    y = temp;
    document.getElementById('sam-output').innerText = "Swapped: x = " + x + ", y = " + y;

    // Emily's Method: Without using a third variable
    let a = 5;
    let b = 8;
    [a, b] = [b, a];
    document.getElementById('emily-output').innerText = "Swapped: a = " + a + ", b = " + b;

    console.log("Sam's Method (After Swap): x =", x, "y =", y);
    console.log("Emily's Method (After Swap): a =", a, "b =", b);
}

function calculateInterest() {
    // Charlie's Investment (Simple Interest)
    // Formula: A = P(1 + rt) 
    // Or SI = (P*R*T)/100, Total = P + SI
    let charlieP = 2000;
    let charlieR = 4;
    let charlieT = 3;
    let simpleInterest = (charlieP * charlieR * charlieT) / 100;
    let charlieTotal = charlieP + simpleInterest;
    document.getElementById('charlie-output').innerText = "Total Amount: $" + charlieTotal.toFixed(2);

    // James's Investment (Compound Interest)
    // Formula: A = P(1 + r/n)^(nt)
    // Compounded annually (n=1)
    let jamesP = 1500;
    let jamesR = 5 / 100; // 5%
    let jamesT = 4;
    let jamesTotal = jamesP * Math.pow((1 + jamesR), jamesT);
    document.getElementById('james-output').innerText = "Total Amount: $" + jamesTotal.toFixed(2);

    console.log("Charlie's Total Amount (Simple Interest):", charlieTotal.toFixed(2));
    console.log("James's Total Amount (Compound Interest):", jamesTotal.toFixed(2));
}

function convertTemperature() {
    let f = document.getElementById('fahrenheit').value;
    // Formula: C = (F - 32) * 5/9
    let c = (f - 32) * 5 / 9;
    document.getElementById('temp-output').innerText = "The temperature of America in Indian system is " + c.toFixed(2) + " Celsius";
    console.log("Question 3: " + f + "F is " + c.toFixed(2) + "C");
}

function calculateAreas() {
    // Circle
    let r = document.getElementById('radius').value;
    let circleArea = Math.PI * r * r;
    document.getElementById('circle-output').innerText = "Area: " + circleArea.toFixed(2);

    // Rectangle
    let w = document.getElementById('width').value;
    let h = document.getElementById('height').value;
    let rectArea = w * h;
    document.getElementById('rect-output').innerText = "Area: " + rectArea.toFixed(2);

    // Triangle
    let b = document.getElementById('base').value;
    let th = document.getElementById('tri-height').value;
    let triArea = 0.5 * b * th;
    document.getElementById('tri-output').innerText = "Area: " + triArea.toFixed(2);

    console.log("Question 4: Circle Area=" + circleArea + ", Rect Area=" + rectArea + ", Triangle Area=" + triArea);
}
