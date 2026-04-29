// Part 1: Logic for Console and Document
function calcConsole() {
    let basic = 60000; // Fixed for demo
    let result = calculateSalaryLogic(basic);

    if (typeof result === 'string') {
        console.error(result);
        document.getElementById('console-display').innerHTML = `<p style="color:red">${result}</p>`;
    } else {
        console.log("--- Salary Details (Console) ---");
        console.log("Basic:", basic);
        console.log("DA:", result.da);
        console.log("HRA:", result.hra);
        console.log("GS:", result.gs);
        console.log("PF:", result.pf);
        console.log("Net:", result.net);

        document.getElementById('console-display').innerHTML = `
            <p>Calculated for basic: 60000</p>
            <ul>
                <li>DA: ${result.da}</li>
                <li>HRA: ${result.hra}</li>
                <li>GS: ${result.gs}</li>
                <li>PF: ${result.pf}</li>
                <li><strong>Net: ${result.net}</strong></li>
            </ul>
        `;
    }
}

// Part 2: Logic for Form
function calcForm() {
    let basic = parseFloat(document.getElementById('basic').value);
    let result = calculateSalaryLogic(basic);

    if (typeof result === 'string') {
        alert(result);
    } else {
        document.getElementById('da').value = result.da.toFixed(2);
        document.getElementById('hra').value = result.hra.toFixed(2);
        document.getElementById('gs').value = result.gs.toFixed(2);
        document.getElementById('pf').value = result.pf.toFixed(2);
        document.getElementById('net').value = result.net.toFixed(2);
    }
}

// Reusable logic
function calculateSalaryLogic(basic) {
    let da, hra, gs, pf, net;

    if (basic > 0 && basic <= 5000) {
        da = 0.10 * basic;
        hra = 0.15 * basic;
    } else if (basic > 5000 && basic <= 50000) {
        da = 0.15 * basic;
        hra = 0.20 * basic;
    } else if (basic > 50000 && basic <= 100000) {
        da = 0.20 * basic;
        hra = 0.25 * basic;
    } else {
        return "Company won't provide basic salary more than 100000.";
    }

    gs = basic + da + hra;

    // PF calculation based on bracket
    if (basic <= 5000) pf = 0.05 * gs;
    else if (basic <= 50000) pf = 0.10 * gs;
    else pf = 0.15 * gs;

    net = gs - pf;

    return { da, hra, gs, pf, net };
}
