import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function StudentCRUD({ user, onRequireAuth }) {
  const [students, setStudents] = useState([]);
  const [formData, setFormData] = useState({ rollNo: '', name: '', course: '', branch: '', fee: '' });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    if (!user) {
      onRequireAuth();
      return;
    }
    fetchStudents();
  }, [user]);

  const fetchStudents = async () => {
    try {
      const res = await axios.get('http://localhost:3000/api/students');
      setStudents(res.data);
    } catch (err) {
      console.error('Failed to fetch students:', err);
    }
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await axios.put(`http://localhost:3000/api/students/${editingId}`, formData);
      } else {
        await axios.post('http://localhost:3000/api/students', formData);
      }
      setFormData({ rollNo: '', name: '', course: '', branch: '', fee: '' });
      setEditingId(null);
      fetchStudents(); // Refresh table
    } catch (err) {
      alert(err.response?.data?.message || 'Error saving student');
    }
  };

  const handleEdit = (s) => {
    setFormData({ rollNo: s.rollNo, name: s.name, course: s.course, branch: s.branch, fee: s.fee });
    setEditingId(s._id);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this record?')) return;
    try {
      await axios.delete(`http://localhost:3000/api/students/${id}`);
      fetchStudents();
    } catch (err) {
      alert('Error deleting student');
    }
  };

  if (!user) return null; // Let the effect redirect to auth

  return (
    <div>
      <div className="card">
        <h2 style={{ marginBottom: '1.5rem', color: '#bb86fc' }}>
          {editingId ? 'Edit Student Registration' : 'Student Registration Form'}
        </h2>
        
        <form onSubmit={handleSubmit}>
          <div className="grid-2">
            <div className="form-group">
              <label>Student ID (Roll No)</label>
              <input type="text" name="rollNo" className="form-control" value={formData.rollNo} onChange={handleChange} required disabled={!!editingId} />
            </div>
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" name="name" className="form-control" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Course</label>
              <input type="text" name="course" className="form-control" value={formData.course} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Branch</label>
              <input type="text" name="branch" className="form-control" value={formData.branch} onChange={handleChange} required />
            </div>
            <div className="form-group" style={{ gridColumn: '1 / -1' }}>
              <label>Fee Details</label>
              <input type="number" name="fee" className="form-control" value={formData.fee} onChange={handleChange} required />
            </div>
          </div>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
            <button type="submit" className="btn btn-primary" style={{ width: 'auto' }}>
              {editingId ? 'Update Record' : 'Submit Registration'}
            </button>
            {editingId && (
              <button type="button" className="btn" style={{ background: '#3d3d3d', color: 'white' }} onClick={() => { setEditingId(null); setFormData({ rollNo: '', name: '', course: '', branch: '', fee: '' }); }}>
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      <div className="card">
        <h2 style={{ marginBottom: '1.5rem', color: '#bb86fc' }}>MongoDB Student Records</h2>
        <div style={{ overflowX: 'auto' }}>
          <table className="table">
            <thead>
              <tr>
                <th>Student ID</th>
                <th>Name</th>
                <th>Course</th>
                <th>Branch</th>
                <th>Fee</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map((s) => (
                <tr key={s._id}>
                  <td><strong>{s.rollNo}</strong></td>
                  <td>{s.name}</td>
                  <td>{s.course}</td>
                  <td>{s.branch}</td>
                  <td>₹{s.fee}</td>
                  <td>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <button className="btn btn-success" onClick={() => handleEdit(s)}>Edit</button>
                      <button className="btn btn-danger" onClick={() => handleDelete(s._id)}>Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
              {students.length === 0 && (
                <tr>
                  <td colSpan="6" style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-secondary)' }}>
                    No student records found in the database.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
