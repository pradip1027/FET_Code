function getMatrix(className) {
    let vals = document.getElementsByClassName(className);
    let m = [[], [], []];
    for (let i = 0; i < 9; i++) {
        m[Math.floor(i / 3)].push(parseFloat(vals[i].value) || 0);
    }
    return m;
}

function displayResult(id, matrix) {
    let container = document.getElementById(id);
    container.innerHTML = "";
    for (let i = 0; i < 3; i++) {
        let rowDiv = document.createElement("div");
        rowDiv.className = "row";
        for (let j = 0; j < 3; j++) {
            let span = document.createElement("span");
            span.className = "m-res";
            span.innerText = typeof matrix[i][j] === 'number' ? matrix[i][j].toFixed(1) : matrix[i][j];
            rowDiv.appendChild(span);
        }
        container.appendChild(rowDiv);
    }
}

function calculateAll() {
    let m1 = getMatrix('m1-val');
    let m2 = getMatrix('m2-val');

    let addM = [[], [], []];
    let subM = [[], [], []];
    let mulM = [[], [], []];
    let divM = [[], [], []];

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            addM[i][j] = m1[i][j] + m2[i][j];
            subM[i][j] = m1[i][j] - m2[i][j];
            mulM[i][j] = m1[i][j] * m2[i][j];
            divM[i][j] = m2[i][j] !== 0 ? (m1[i][j] / m2[i][j]) : "Inf";
        }
    }

    displayResult("add-res", addM);
    displayResult("sub-res", subM);
    displayResult("mul-res", mulM);
    displayResult("div-res", divM);

    console.log("Matrix 1:", m1);
    console.log("Matrix 2:", m2);
    console.log("Addition:", addM);
}
