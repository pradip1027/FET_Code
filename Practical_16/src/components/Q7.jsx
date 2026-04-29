import React, { useState } from 'react';

export default function Q7() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', course: '', previousDegree: '', query: ''
  });
  const [enquiries, setEnquiries] = useState([]);

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.course) {
      alert("Please fill out at least Name, Email, and Course fields.");
      return;
    }
    setEnquiries([...enquiries, formData]);
    setFormData({ name: '', email: '', phone: '', course: '', previousDegree: '', query: '' });
  };

  return (
    <div className="card">
      <div className="question-header">
        <h2>Q7: Admission Enquiry Form</h2>
        <div className="question-desc">
          Enter admission details and display the information on the web page in tabular format when the button is clicked.
        </div>
      </div>

      <div className="grid-2">
        <div className="form-group">
          <label>Full Name</label>
          <input 
            type="text" 
            value={formData.name} 
            onChange={(e) => setFormData({...formData, name: e.target.value})} 
          />
        </div>
        <div className="form-group">
          <label>Email Address</label>
          <input 
            type="email" 
            value={formData.email} 
            onChange={(e) => setFormData({...formData, email: e.target.value})} 
          />
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input 
            type="tel" 
            value={formData.phone} 
            onChange={(e) => setFormData({...formData, phone: e.target.value})} 
          />
        </div>
        <div className="form-group">
          <label>Interested Course</label>
          <select 
            value={formData.course} 
            onChange={(e) => setFormData({...formData, course: e.target.value})}
          >
            <option value="">Select Course</option>
            <option value="B.Tech Computer Science">B.Tech Computer Science</option>
            <option value="B.Tech Information Technology">B.Tech Information Technology</option>
            <option value="MCA">MCA</option>
            <option value="M.Tech">M.Tech</option>
            <option value="BCA">BCA</option>
          </select>
        </div>
        <div className="form-group">
          <label>Highest Qualification</label>
          <input 
            type="text" 
            value={formData.previousDegree} 
            onChange={(e) => setFormData({...formData, previousDegree: e.target.value})} 
          />
        </div>
        <div className="form-group" style={{ gridColumn: '1 / -1' }}>
          <label>Enquiry / Message</label>
          <textarea 
            rows="3"
            value={formData.query} 
            onChange={(e) => setFormData({...formData, query: e.target.value})} 
          ></textarea>
        </div>
      </div>

      <button onClick={handleSubmit}>Submit Enquiry</button>

      {enquiries.length > 0 && (
        <div style={{ marginTop: '2rem', overflowX: 'auto' }}>
          <h3>Enquiry List</h3>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Course</th>
                <th>Qualification</th>
                <th>Message</th>
              </tr>
            </thead>
            <tbody>
              {enquiries.map((enq, idx) => (
                <tr key={idx}>
                  <td>{enq.name}</td>
                  <td>{enq.email}</td>
                  <td>{enq.phone}</td>
                  <td><span style={{ color: '#8b5cf6', fontWeight: '500' }}>{enq.course}</span></td>
                  <td>{enq.previousDegree}</td>
                  <td>{enq.query}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
