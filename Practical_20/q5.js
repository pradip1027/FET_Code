const express = require('express');
const app = express();
const port = 3001;

// Home Route
app.get('/', (req, res) => {
  res.send('<h1>Home Page</h1><p>Welcome to our Web Application.</p>');
});

// About Route
app.get('/about', (req, res) => {
  res.send('<h1>About Us</h1><p>Learn more about our company here.</p>');
});

// Contact Route
app.get('/contact', (req, res) => {
  res.send('<h1>Contact Us</h1><p>Email us at: support@example.com</p>');
});

// Image Gallery Route (Using write() and end())
app.get('/gallery', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.write('<h1>Image Gallery</h1>');
  res.write('<p>Below are some sample image descriptions:</p>');
  res.write('<ul>');
  res.write('<li>Image 1: A beautiful sunset</li>');
  res.write('<li>Image 2: A majestic mountain</li>');
  res.write('<li>Image 3: A calm ocean</li>');
  res.write('</ul>');
  res.end(); // Must call end() when using write()
});

// Set up a server and display a confirmation message
app.listen(port, () => {
  console.log('--------------------------------------------------');
  console.log(`[Q5] Server started successfully!`);
  console.log(`[Q5] Listening at http://localhost:${port}`);
  console.log('--------------------------------------------------');
});
