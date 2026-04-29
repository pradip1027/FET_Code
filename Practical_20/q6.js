const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3002;

app.get('/', (req, res) => {
  res.send('<h1>Home Page</h1><a href="/data">View JSON Data</a>');
});

app.get('/about', (req, res) => {
  res.send('<h1>About Us</h1>');
});

app.get('/contact', (req, res) => {
  res.send('<h1>Contact Us</h1>');
});

app.get('/gallery', (req, res) => {
  res.send('<h1>Image Gallery</h1>');
});

// Route to read data from a JSON file and display it
app.get('/data', (req, res) => {
  const dataPath = path.join(__dirname, 'data.json');
  
  fs.readFile(dataPath, 'utf-8', (err, data) => {
    if (err) {
      res.status(500).send("Error reading data file");
      return;
    }
    
    // Parse the data to display nicely (or just send raw)
    const jsonData = JSON.parse(data);
    
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>Data from JSON File:</h1>');
    res.write('<ul>');
    
    jsonData.students.forEach(student => {
       res.write(`<li><strong>${student.name}</strong> - Age: ${student.age}, Course: ${student.course}</li>`);
    });
    
    res.write('</ul>');
    res.end();
  });
});

app.listen(port, () => {
  console.log('--------------------------------------------------');
  console.log(`[Q6] Server started successfully!`);
  console.log(`[Q6] Listening at http://localhost:${port}`);
  console.log('--------------------------------------------------');
});
