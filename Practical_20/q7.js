const express = require('express');
const path = require('path');
const app = express();
const port = 3003;

// Middleware to parse URL-encoded data from form submissions
// This satisfies requirement (e): Use middleware with the use() method
app.use(express.urlencoded({ extended: true }));

// Home Route
app.get('/', (req, res) => {
  res.send('<h1>College Portal</h1><a href="/enquiry">Go to College Admission Enquiry Form</a>');
});

// Enquiry Route (GET) - Serves the HTML form
app.get('/enquiry', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'enquiry.html'));
});

// Enquiry Route (POST) - Handles form submission
app.post('/submit-enquiry', (req, res) => {
  const { studentName, email, phone, course } = req.body;
  
  res.setHeader('Content-Type', 'text/html');
  res.write('<h1>Enquiry Received Successfully!</h1>');
  res.write('<p>Thank you for your interest. We have received the following details:</p>');
  res.write(`<ul>`);
  res.write(`<li><strong>Name:</strong> ${studentName}</li>`);
  res.write(`<li><strong>Email:</strong> ${email}</li>`);
  res.write(`<li><strong>Phone:</strong> ${phone}</li>`);
  res.write(`<li><strong>Course of Interest:</strong> ${course}</li>`);
  res.write(`</ul>`);
  res.write('<a href="/">Back to Home</a>');
  res.end();
});

app.listen(port, () => {
  console.log('--------------------------------------------------');
  console.log(`[Q7] Server started successfully!`);
  console.log(`[Q7] Listening at http://localhost:${port}`);
  console.log('--------------------------------------------------');
});
