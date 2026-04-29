function submitForm() {
    const form = document.employeeForm;
    const employeeData = [];

    // Collecting values from the form
    const empId = form.empId.value;
    const empName = form.empName.value;
    const password = form.password.value;
    const dob = form.dob.value;

    let gender = "";
    const genders = document.getElementsByName("gender");
    for (let g of genders) {
        if (g.checked) {
            gender = g.value;
            break;
        }
    }

    const qualification = form.qualification.value;
    const mobile = form.mobile.value;
    const email = form.email.value;
    const address = form.address.value;

    // Storing in array
    employeeData.push(empId);
    employeeData.push(empName);
    employeeData.push(password);
    employeeData.push(dob);
    employeeData.push(gender);
    employeeData.push(qualification);
    employeeData.push(mobile);
    employeeData.push(email);
    employeeData.push(address);

    // 1. Display in alert
    alert("Employee Data Captured:\n" + employeeData.join("\n"));

    // 2. Display on console
    console.log("Captured Employee Data (Array):", employeeData);

    // 3. Display on web page
    const resultBox = document.getElementById("result-container");
    const displayArea = document.getElementById("array-display");

    resultBox.style.display = "block";
    displayArea.innerHTML = "<strong>Array Contents:</strong> [" + employeeData.map(item => `'${item}'`).join(", ") + "]";
}
