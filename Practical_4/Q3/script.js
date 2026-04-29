// 1. Swap
const swapBtn = document.getElementById('swapBtn');
swapBtn.onclick = () => {
    let x = document.getElementById('x').value;
    let y = document.getElementById('y').value;
    let temp = x;
    x = y;
    y = temp;
    document.getElementById('x').value = x;
    document.getElementById('y').value = y;
    document.getElementById('swapRes').innerText = "Swapped using temp variable (Click)";
};

swapBtn.ondblclick = () => {
    let x = document.getElementById('x').value;
    let y = document.getElementById('y').value;
    [x, y] = [y, x];
    document.getElementById('x').value = x;
    document.getElementById('y').value = y;
    document.getElementById('swapRes').innerText = "Swapped using destructuring (Double Click)";
};

// 2. Reverse (onchange)
document.getElementById('revInput').onchange = function () {
    let val = this.value;
    if (val.length !== 5) {
        document.getElementById('revRes').innerText = "Please enter exactly 5 digits.";
        return;
    }
    let reversed = val.split('').reverse().join('');
    document.getElementById('revRes').innerText = "Reversed: " + reversed;
};

// 3. Armstrong & Palindrome (focus)
document.getElementById('logicCheckField').onfocus = function () {
    let val = document.getElementById('logicInput').value;
    let num = parseInt(val);

    // Palindrome check
    let isPalin = val === val.split('').reverse().join('');

    // Armstrong check (for 3 digits based on standard examples, but let's do generic)
    let sum = 0;
    let temp = num;
    let digits = val.length;
    while (temp > 0) {
        let remainder = temp % 10;
        sum += Math.pow(remainder, digits);
        temp = parseInt(temp / 10);
    }
    let isArm = sum === num;

    document.getElementById('logicRes').innerText =
        `Palindrome: ${isPalin}, Armstrong: ${isArm}`;
};

// 4. Merge Arrays
document.getElementById('mergeBtn').onclick = () => {
    let a1 = document.getElementById('arr1').value.split(',').map(s => s.trim());
    let a2 = document.getElementById('arr2').value.split(',').map(s => s.trim());
    let a3 = a1.concat(a2);
    document.getElementById('mergeRes').innerText = "Merged Array: [" + a3.join(", ") + "]";
};
