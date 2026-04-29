import React, { useState } from 'react';
import { Routes, Route, Link, useNavigate, Navigate } from 'react-router-dom';

const Signup = ({ registeredUsers, setRegisteredUsers }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    if (registeredUsers.find(u => u.username === username)) {
      alert('User already exists!');
      return;
    }
    setRegisteredUsers([...registeredUsers, { username, password }]);
    alert('Signup successful! Please login.');
    navigate('/q2/login');
  };

  return (
    <div>
      <h3>Sign Up</h3>
      <form onSubmit={handleSignup} style={{ maxWidth: '400px', marginTop: '1rem' }}>
        <input type="text" placeholder="Username" required value={username} onChange={e=>setUsername(e.target.value)} />
        <input type="password" placeholder="Password" required value={password} onChange={e=>setPassword(e.target.value)} />
        <button type="submit">Register</button>
      </form>
      <p style={{ marginTop: '1rem' }}>Already have an account? <Link to="/q2/login" style={{ color: '#38bdf8' }}>Sign In here</Link></p>
    </div>
  );
};

const Login = ({ registeredUsers, setAuthUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const user = registeredUsers.find(u => u.username === username && u.password === password);
    if (user) {
      setAuthUser(user.username);
      navigate('/q2/dashboard');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div>
      <h3>Sign In</h3>
      <form onSubmit={handleLogin} style={{ maxWidth: '400px', marginTop: '1rem' }}>
        <input type="text" placeholder="Username" required value={username} onChange={e=>setUsername(e.target.value)} />
        <input type="password" placeholder="Password" required value={password} onChange={e=>setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
      <p style={{ marginTop: '1rem' }}>Don't have an account? <Link to="/q2/signup" style={{ color: '#38bdf8' }}>Sign Up here</Link></p>
    </div>
  );
};

const Dashboard = ({ authUser, setAuthUser }) => {
  const navigate = useNavigate();
  if (!authUser) return <Navigate to="/q2/login" />;

  const handleLogout = () => {
    setAuthUser(null);
    navigate('/q2/login');
  };

  return (
    <div className="content-box">
      <h2>Welcome to the Main Dashboard!</h2>
      <p>Hello, <strong>{authUser}</strong>. You are securely logged in.</p>
      <button className="danger" onClick={handleLogout} style={{ marginTop: '1rem' }}>Log Out</button>
    </div>
  );
};

export default function Q2() {
  const [registeredUsers, setRegisteredUsers] = useState([]);
  const [authUser, setAuthUser] = useState(null);

  return (
    <div className="card">
      <h2>Q2: Authentication Router System</h2>
      <div style={{ marginTop: '2rem' }}>
        <Routes>
          <Route path="/" element={<Navigate to="login" />} />
          <Route path="signup" element={<Signup registeredUsers={registeredUsers} setRegisteredUsers={setRegisteredUsers} />} />
          <Route path="login" element={<Login registeredUsers={registeredUsers} setAuthUser={setAuthUser} />} />
          <Route path="dashboard" element={<Dashboard authUser={authUser} setAuthUser={setAuthUser} />} />
        </Routes>
      </div>
    </div>
  );
}
