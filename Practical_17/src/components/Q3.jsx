import React, { useState } from 'react';

export default function Q3() {
  const [student, setStudent] = useState({
    id: '', name: '', course: '', branch: '', fee: ''
  });
  const [studentsList, setStudentsList] = useState([]);

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleAddStudent = (e) => {
    e.preventDefault();
    if (!student.id || !student.name || !student.course) {
      alert("Please fill out at least Student ID, Name, and Course.");
      return;
    }
    
    setStudentsList([...studentsList, student]);
    // Clear form
    setStudent({ id: '', name: '', course: '', branch: '', fee: '' });
  };

  return (
    <div className="card">
      <div className="question-header">
        <h2>Q3: Student Information System</h2>
        <div className="question-desc">
          Reads student information from input fields and displays the details in a table using useState.
        </div>
      </div>

      <form onSubmit={handleAddStudent}>
        <div className="grid-2">
          <div className="form-group">
            <label>Student ID</label>
            <input 
              type="text" 
              name="id" 
              value={student.id} 
              onChange={handleChange} 
            />
          </div>
          <div className="form-group">
            <label>Full Name</label>
            <input 
              type="text" 
              name="name" 
              value={student.name} 
              onChange={handleChange} 
            />
          </div>
          <div className="form-group">
            <label>Course</label>
            <input 
              type="text" 
              name="course" 
              value={student.course} 
              onChange={handleChange} 
            />
          </div>
          <div className="form-group">
            <label>Branch</label>
            <input 
              type="text" 
              name="branch" 
              value={student.branch} 
              onChange={handleChange} 
            />
          </div>
          <div className="form-group" style={{ gridColumn: '1 / -1' }}>
            <label>Fee Details (₹)</label>
            <input 
              type="number" 
              name="fee" 
              value={student.fee} 
              onChange={handleChange} 
            />
          </div>
        </div>
        <button type="submit">Add Student Record</button>
      </form>

      {studentsList.length > 0 && (
        <div style={{ marginTop: '3rem' }}>
          <h3>Enrolled Students Directory</h3>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Course</th>
                <th>Branch</th>
                <th>Fee Details</th>
              </tr>
            </thead>
            <tbody>
              {studentsList.map((stu, index) => (
                <tr key={index}>
                  <td><strong>{stu.id}</strong></td>
                  <td>{stu.name}</td>
                  <td>{stu.course}</td>
                  <td>{stu.branch}</td>
                  <td>₹{stu.fee}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
