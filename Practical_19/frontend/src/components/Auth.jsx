import React, { useState } from 'react';
import axios from 'axios';

export default function Auth({ onLogin, user }) {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [formData, setFormData] = useState({
    name: '', email: '', contact: '', password: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  if (user) {
    return (
      <div className="card text-center">
        <h2>You are currently logged in!</h2>
        <p>Head over to the Student CRUD tab to manage the database.</p>
      </div>
    );
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      if (isLoginMode) {
        // Login Request
        const res = await axios.post('http://localhost:3000/api/login', {
          email: formData.email,
          password: formData.password
        });
        setSuccess(res.data.message);
        onLogin(res.data.user); // Triggers navigation to home (crud tab)
      } else {
        // Signup Request
        const res = await axios.post('http://localhost:3000/api/signup', formData);
        setSuccess(res.data.message);
        // Auto-login after successful registration
        onLogin(res.data.user);
      }
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred during authentication.');
    }
  };

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto' }}>
      <div className="card">
        <h2 style={{ marginBottom: '1.5rem', color: '#bb86fc' }}>
          {isLoginMode ? 'Sign In to Account' : 'Register New User'}
        </h2>

        {error && <div className="alert alert-error">{error}</div>}
        {success && <div className="alert" style={{ backgroundColor: 'rgba(3, 218, 198, 0.2)', color: '#03dac6', border: '1px solid #03dac6' }}>{success}</div>}

        <form onSubmit={handleSubmit}>
          {!isLoginMode && (
            <>
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" name="name" className="form-control" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Contact Number</label>
                <input type="text" name="contact" className="form-control" value={formData.contact} onChange={handleChange} required />
              </div>
            </>
          )}

          <div className="form-group">
            <label>Email Address</label>
            <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" name="password" className="form-control" value={formData.password} onChange={handleChange} required />
          </div>

          <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem' }}>
            {isLoginMode ? 'Sign In' : 'Create Account'}
          </button>
        </form>

        <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
          <button 
            style={{ background: 'none', border: 'none', color: '#bb86fc', cursor: 'pointer', textDecoration: 'underline' }}
            onClick={() => { setIsLoginMode(!isLoginMode); setError(''); }}
          >
            {isLoginMode ? "Don't have an account? Sign Up" : "Already have an account? Sign In"}
          </button>
        </div>
      </div>
    </div>
  );
}
