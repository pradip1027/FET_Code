import React from 'react';

export default function Theory() {
  return (
    <div>
      <div className="card">
        <h2 style={{ color: '#bb86fc', marginBottom: '1rem' }}>1. Database Connectivity Concept in React JS</h2>
        <p>
          React JS is a frontend library that runs in the client's browser. It <strong>cannot and should not</strong> connect directly to a database like MongoDB due to security risks (exposing credentials to the public). Instead, React connects to a backend API (Middleware) using HTTP requests (Axios or Fetch).
        </p>
        <pre style={{ marginTop: '1rem' }}>{`
[ React JS Frontend ]  --- (HTTP GET/POST) --->  [ Node.js/Express Backend ]
                                                            |
                                                   (Mongoose Driver)
                                                            |
                                                            V
                                                [ MongoDB Database Server ]
        `}</pre>
      </div>

      <div className="card">
        <h2 style={{ color: '#bb86fc', marginBottom: '1rem' }}>2. What is Backend API (Node.js, Express)?</h2>
        <p>
          A Backend API is a server-side application that handles business logic, security, and database communication. 
        </p>
        <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem', color: 'var(--text-secondary)' }}>
          <li style={{ marginBottom: '0.5rem' }}><strong>Node.js:</strong> A JavaScript runtime environment that executes code outside the browser.</li>
          <li><strong>Express.js:</strong> A framework for Node.js that makes it easy to build web applications, define API routes (endpoints), parse JSON bodies via middleware like <code>express.json()</code>, and handle HTTP methods (GET, POST, PUT, DELETE).</li>
        </ul>
      </div>

      <div className="card">
        <h2 style={{ color: '#bb86fc', marginBottom: '1rem' }}>3. What is MongoDB?</h2>
        <p>
          MongoDB is a NoSQL, document-oriented database. Data is stored in flexible JSON-like formats called BSON.
        </p>
        <div style={{ marginTop: '1rem' }}>
          <strong style={{ color: '#fff' }}>Process of Creating a Database & Collection:</strong>
          <ol style={{ paddingLeft: '1.5rem', marginTop: '0.5rem', color: 'var(--text-secondary)' }}>
            <li>Open MongoDB Compass or Mongo Shell.</li>
            <li>Run <code>use practical19_db</code> (switches to DB and creates it if data is inserted).</li>
            <li>Run <code>db.createCollection("students")</code> to manually create a collection.</li>
          </ol>
        </div>
        <div style={{ marginTop: '1rem' }}>
          <strong style={{ color: '#fff' }}>Inserting Documents:</strong>
          <pre style={{ marginTop: '0.5rem' }}>{`// In Mongo Shell:
db.students.insertOne({ name: "John Doe", course: "MCA" });

// In Node.js Backend using Mongoose:
const student = new Student({ name: "John", course: "MCA" });
await student.save();`}</pre>
        </div>
      </div>
    </div>
  );
}
