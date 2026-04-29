// 1. Named Function (without parameters)
function displayNamed() {
    const rno = document.getElementById('rno').value;
    const name = document.getElementById('name').value;
    const course = document.getElementById('course').value;
    const fee = document.getElementById('fee').value;
    const contact = document.getElementById('contact').value;

    const info = `Named Function - RNo: ${rno}, Name: ${name}, Course: ${course}, Fee: ${fee}, Contact: ${contact}`;
    document.getElementById('displayText').innerText = info;
    console.log("Named Function Display:", info);
}

// 2. Arrow Function (without parameters)
const displayArrow = () => {
    const rno = document.getElementById('rno').value;
    const name = document.getElementById('name').value;
    const course = document.getElementById('course').value;
    const fee = document.getElementById('fee').value;
    const contact = document.getElementById('contact').value;

    const info = `Arrow Function - RNo: ${rno}, Name: ${name}, Course: ${course}, Fee: ${fee}, Contact: ${contact}`;
    document.getElementById('displayText').innerText = info;
    console.log("Arrow Function Display:", info);
};

// 3. Anonymous Function (without parameters)
const displayAnonymous = function () {
    const rno = document.getElementById('rno').value;
    const name = document.getElementById('name').value;
    const course = document.getElementById('course').value;
    const fee = document.getElementById('fee').value;
    const contact = document.getElementById('contact').value;

    const info = `Anonymous Function - RNo: ${rno}, Name: ${name}, Course: ${course}, Fee: ${fee}, Contact: ${contact}`;
    document.getElementById('displayText').innerText = info;
    console.log("Anonymous Function Display:", info);
};

// Attaching events for arrow and anonymous functions
document.getElementById('arrowBtn').addEventListener('click', displayArrow);
document.getElementById('anonBtn').addEventListener('click', displayAnonymous);
