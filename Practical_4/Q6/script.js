document.getElementById('regForm').onsubmit = function (e) {
    e.preventDefault();

    let errors = [];
    const errorBox = document.getElementById('error-box');
    errorBox.innerHTML = "";

    // 1. Alphabet Validation (Student, Father, Mother)
    const alphaRegex = /^[A-Za-z\s]+$/;
    const names = [
        { id: 'studentName', label: 'Student Name' },
        { id: 'fatherName', label: 'Father Name' },
        { id: 'motherName', label: 'Mother Name' }
    ];

    names.forEach(n => {
        const val = document.getElementById(n.id).value.trim();
        if (!val) {
            errors.push(`${n.label} is required.`);
        } else if (!alphaRegex.test(val)) {
            errors.push(`${n.label} should only contain alphabets.`);
        }
    });

    // 2. Number Validation (Mobile)
    const mobileNo = document.getElementById('mobileNo').value.trim();
    const mobileRegex = /^\d{10}$/;
    if (!mobileNo) {
        errors.push("Mobile Number is required.");
    } else if (!mobileRegex.test(mobileNo)) {
        errors.push("Mobile Number must be exactly 10 digits.");
    }

    // 3. Email Validation
    const emailId = document.getElementById('emailId').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailId) {
        errors.push("Email Id is required.");
    } else if (!emailRegex.test(emailId)) {
        errors.push("Invalid Email format.");
    }

    // 4. Dropdown Validation (Course)
    const course = document.getElementById('course').value;
    if (!course) {
        errors.push("Please select a Course.");
    }

    // 5. Radio Validation (Gender)
    const genders = document.getElementsByName('gender');
    let genderSelected = false;
    for (let r of genders) {
        if (r.checked) {
            genderSelected = true;
            break;
        }
    }
    if (!genderSelected) {
        errors.push("Please select Gender.");
    }

    // 6. Checkbox Validation (Branch)
    const branches = document.getElementsByName('branch');
    let branchSelected = false;
    for (let c of branches) {
        if (c.checked) {
            branchSelected = true;
            break;
        }
    }
    if (!branchSelected) {
        errors.push("Please select at least one Branch.");
    }

    // Display Results
    if (errors.length > 0) {
        errorBox.innerHTML = errors.join("<br>");
    } else {
        alert("Form Submitted Successfully!");
        console.log("Form Data Validated.");
    }
};
