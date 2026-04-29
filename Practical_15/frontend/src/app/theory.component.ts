import { Component } from '@angular/core';

@Component({
  selector: 'app-theory',
  standalone: true,
  template: `
    <div class="box">
      <h2>1. Concept of Database Connectivity in Angular</h2>
      <p>Angular runs in the user's browser. Directly connecting it to a database like MongoDB is a security risk. Instead, Angular uses the <code>HttpClient</code> to send requests to a Backend API (Node.js/Express). The backend then securely connects to the database.</p>
      <pre>
[ Angular Frontend ] ---> HTTP GET/POST ---> [ Backend API ] ---> Mongoose ---> [ MongoDB ]
      </pre>
    </div>

    <div class="box">
      <h2>2. What is Backend API (Node.js, Express)?</h2>
      <p>A Backend API acts as a middleman. It processes requests, interacts with the database, and returns JSON data. Node.js is the runtime environment, and Express is the web framework used to quickly create API routes.</p>
    </div>

    <div class="box">
      <h2>3. What is MongoDB? Process of creating DB & inserting documents</h2>
      <p>MongoDB is a NoSQL database storing data in JSON-like documents. </p>
      <ul>
        <li><strong>Create DB:</strong> Use command <code>use practical15_db</code> in mongosh.</li>
        <li><strong>Create Collection & Insert:</strong> <code>db.students.insertOne({{ '{' }} name: "Test", course: "IT" {{ '}' }})</code></li>
      </ul>
    </div>
  `
})
export class TheoryComponent {}
