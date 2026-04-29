const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const contactRegex = /^\d{10}$/;

// Signup Logic
const signupForm = document.getElementById('signupForm');
if (signupForm) {
    signupForm.onsubmit = function (e) {
        e.preventDefault();
        const contact = document.getElementById('contact').value;
        const email = document.getElementById('email').value;
        const errorDiv = document.getElementById('error');

        if (!contactRegex.test(contact)) {
            errorDiv.innerText = "Invalid Contact Number! Must be 10 digits.";
            return;
        }

        if (!emailRegex.test(email)) {
            errorDiv.innerText = "Invalid Email Address!";
            return;
        }

        const user = {
            fname: document.getElementById('fname').value,
            lname: document.getElementById('lname').value,
            email: email,
            contact: contact
        };

        localStorage.setItem('registeredUser', JSON.stringify(user));
        alert("Sign Up Successful! Redirecting to Sign In...");
        window.location.href = 'signin.html';
    };
}

// Signin Logic
const signinForm = document.getElementById('signinForm');
if (signinForm) {
    signinForm.onsubmit = function (e) {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const contact = document.getElementById('loginContact').value;
        const errorDiv = document.getElementById('error');

        if (!emailRegex.test(email)) {
            errorDiv.innerText = "Invalid Email Format!";
            return;
        }

        const storedUser = JSON.parse(localStorage.getItem('registeredUser'));

        if (storedUser && storedUser.email === email && storedUser.contact === contact) {
            alert("Login Successful! Welcome, " + storedUser.fname);
            // In a real app, redirect to dashboard
        } else {
            errorDiv.innerText = "Invalid Email or Contact Number!";
        }
    };
}
