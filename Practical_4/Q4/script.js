const methods = [
    { name: "toString()", desc: "Converts an array to a string of comma-separated values.", code: "[1, 2, 3].toString()", run: () => [1, 2, 3].toString() },
    { name: "push()", desc: "Adds new elements to the end of an array and returns the new length.", code: "let a = [1]; a.push(2); a", run: () => { let a = [1]; a.push(2); return a.join(", "); } },
    { name: "pop()", desc: "Removes the last element from an array and returns that element.", code: "let a = [1, 2]; a.pop(); a", run: () => { let a = [1, 2]; a.pop(); return a.join(", "); } },
    { name: "shift()", desc: "Removes the first element from an array and returns it.", code: "let a = [1, 2]; a.shift(); a", run: () => { let a = [1, 2]; a.shift(); return a.join(", "); } },
    { name: "unshift()", desc: "Adds new elements to the beginning of an array and returns the new length.", code: "let a = [2]; a.unshift(1); a", run: () => { let a = [2]; a.unshift(1); return a.join(", "); } },
    { name: "concat()", desc: "Joins two or more arrays and returns a new array.", code: "[1].concat([2])", run: () => [1].concat([2]).join(", ") },
    { name: "slice()", desc: "Selects a part of an array and returns a new array.", code: "[1, 2, 3].slice(1, 3)", run: () => [1, 2, 3].slice(1, 3).join(", ") },
    { name: "splice()", desc: "Adds/Removes elements from an array.", code: "let a = [1, 3]; a.splice(1, 0, 2); a", run: () => { let a = [1, 3]; a.splice(1, 0, 2); return a.join(", "); } },
    { name: "forEach()", desc: "Calls a function for each element in the array.", code: "[1, 2].forEach(x => console.log(x))", run: () => { let s = "";[1, 2].forEach(x => s += x + " "); return s.trim(); } },
    { name: "map()", desc: "Creates a new array with the results of calling a function for every array element.", code: "[1, 2].map(x => x * 2)", run: () => [1, 2].map(x => x * 2).join(", ") },
    { name: "filter()", desc: "Creates a new array with every element that passes a test.", code: "[1, 2, 3].filter(x => x > 1)", run: () => [1, 2, 3].filter(x => x > 1).join(", ") },
    { name: "reverse()", desc: "Reverses the order of the elements in an array.", code: "[1, 2, 3].reverse()", run: () => [1, 2, 3].reverse().join(", ") }
];

const container = document.getElementById('methods-container');

methods.forEach(m => {
    const div = document.createElement('div');
    div.className = 'method';
    div.innerHTML = `
        <h3>${m.name}</h3>
        <p class="explanation">${m.desc}</p>
        <code class="code">${m.code}</code>
        <p>Output: <span class="output">${m.run()}</span></p>
    `;
    container.appendChild(div);
});
