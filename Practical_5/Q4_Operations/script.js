$(document).ready(function () {
    const $root = $('#root');
    $root.append('<h2>jQuery Operations Dashboard</h2>');

    // 1. Count Odd and Even
    const $s1 = $('<div class="section"><h3>1. Count Odd & Even</h3></div>');
    $s1.append('<div class="form-row"><input type="text" id="arrayIn" placeholder="1,2,3,4,5"><button id="btn1">Count</button></div>');
    $s1.append('<div id="res1" class="result"></div>');
    $root.append($s1);

    $('#btn1').on('click', function () {
        let vals = $('#arrayIn').val().split(',').map(n => parseInt(n.trim())).filter(n => !isNaN(n));
        let e = 0, o = 0;
        vals.forEach(n => { if (n % 2 === 0) e++; else o++; });
        $('#res1').text(`Even: ${e}, Odd: ${o}`);
    });

    // 2. Reverse 5-digit number
    const $s2 = $('<div class="section"><h3>2. Reverse 5-digit Number</h3></div>');
    $s2.append('<div class="form-row"><input type="number" id="numIn" placeholder="12345"><button id="btn2">Reverse</button></div>');
    $s2.append('<div id="res2" class="result"></div>');
    $root.append($s2);

    $('#btn2').on('click', function () {
        let val = $('#numIn').val();
        if (val.length !== 5) { alert("Enter 5-digit number"); return; }
        $('#res2').text("Reversed: " + val.split('').reverse().join(''));
    });

    // 3. Concat two strings
    const $s3 = $('<div class="section"><h3>3. Concat Strings</h3></div>');
    $s3.append('<div class="form-row"><input type="text" id="str1" placeholder="Hello"><input type="text" id="str2" placeholder="World"><button id="btn3">Concat</button></div>');
    $s3.append('<div id="res3" class="result"></div>');
    $root.append($s3);

    $('#btn3').on('click', function () {
        $('#res3').text("Result: " + $('#str1').val() + $('#str2').val());
    });

    // 4. Sum of first 10 number
    const $s4 = $('<div class="section"><h3>4. Sum of First 10 Numbers</h3></div>');
    $s4.append('<div class="form-row"><button id="btn4">Calculate Sum (1 to 10)</button></div>');
    $s4.append('<div id="res4" class="result"></div>');
    $root.append($s4);

    $('#btn4').on('click', function () {
        let sum = 0;
        for (let i = 1; i <= 10; i++) sum += i;
        $('#res4').text("Sum: " + sum);
    });

});
