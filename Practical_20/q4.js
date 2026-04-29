const express = require('express');
const app = express();
const port = 3000;

// Define a route for the home (/) page
app.get('/', (req, res) => {
  res.send('<h1>Welcome to my Simple Express.js Application!</h1><p>This is the response for Practical 20, Q4.</p>');
});

// Set up a server and display a confirmation message
app.listen(port, () => {
  console.log('--------------------------------------------------');
  console.log(`[Q4] Server started successfully!`);
  console.log(`[Q4] Listening at http://localhost:${port}`);
  console.log('--------------------------------------------------');
});
