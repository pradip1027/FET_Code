# Practical 20: Node.JS and Express.JS

## Q.1. What is Node.JS and Express.JS? Explain with the help of an appropriate example.

**Node.js** is an open-source, cross-platform JavaScript runtime environment built on Chrome's V8 engine. It allows developers to run JavaScript code on the server-side, outside of a web browser. It is designed for building scalable network applications and uses an asynchronous, event-driven I/O model, making it lightweight and efficient.

**Express.js** is a fast, unopinionated, minimalist web framework for Node.js. It provides a robust set of features to develop web and mobile applications. It acts as a layer built on the top of Node.js that helps manage servers and routes more easily. 

**Example:**
While raw Node.js requires you to handle HTTP routing and headers manually using the built-in `http` module, Express provides simplified methods like `app.get()` to handle routes and `res.send()` to automatically format responses.

## Q.2. Explain request and response method in express.js.

*   **Request (`req`)**: The `req` object represents the HTTP request that the client (browser) sends to the server. It contains properties for the request query string, parameters, body (for POST requests), HTTP headers, and more. 
    *   *Example properties*: `req.params` (route parameters), `req.query` (query string), `req.body` (parsed body).
*   **Response (`res`)**: The `res` object represents the HTTP response that an Express app sends back to the client when it receives an HTTP request.
    *   *Example methods*: `res.send()` (sends various types of responses), `res.json()` (sends a JSON response), `res.status()` (sets HTTP status code).

## Q.3. Explain the use of require(), get(), use(), listen(), res.send(), res.write(), res.sendFile(), and path.join() with an appropriate program example.

*   `require()`: Used to import modules (like Express, built-in modules, or local files).
*   `get()`: Used to define a route handler for HTTP GET requests.
*   `use()`: Used to mount middleware functions at a specified path.
*   `listen()`: Starts a UNIX socket and listens for connections on the given path (binds to a port).
*   `res.send()`: Sends the HTTP response (automatically setting headers based on data type).
*   `res.write()`: Sends a chunk of the response body. Multiple `write()` calls can be made before `res.end()`.
*   `res.sendFile()`: Transfers the file at the given path as an HTTP response.
*   `path.join()`: Normalizes and joins all given path segments together using the platform-specific separator.

### Example:
```javascript
const express = require('express'); // Imports express module
const path = require('path'); // Imports path module
const app = express();

app.use(express.static('public')); // Mounts static file middleware

app.get('/', (req, res) => { // Handles GET request to root
    res.write('Hello '); // Sends chunk
    res.write('World');
    res.end();
});

app.get('/file', (req, res) => {
    // Joins current directory path with 'index.html'
    res.sendFile(path.join(__dirname, 'index.html')); 
});

app.listen(3000, () => { // Starts server on port 3000
    console.log('Server running on port 3000');
});
```
