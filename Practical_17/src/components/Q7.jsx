import React, { useState } from 'react';

export default function Q7() {
  const [view, setView] = useState('signup'); // 'signup', 'signin', 'main'
  const [registeredUsers, setRegisteredUsers] = useState([]); // Simulated DB

  // Form State
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleSignUp = (e) => {
    e.preventDefault();
    if (!username || !password) return alert('Fill all fields');

    // Check if exists
    if (registeredUsers.some(u => u.username === username)) {
      alert('Username already exists. Please Sign In.');
      return;
    }

    setRegisteredUsers([...registeredUsers, { username, password }]);
    alert('Registration successful! Please sign in.');
    setUsername('');
    setPassword('');
    setView('signin');
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    const user = registeredUsers.find(u => u.username === username && u.password === password);

    if (user) {
      setLoggedInUser(user.username);
      setView('main');
      setUsername('');
      setPassword('');
    } else {
      alert('Invalid username or password!');
    }
  };

  const handleLogout = () => {
    setLoggedInUser(null);
    setView('signin');
  };

  return (
    <div className="card" style={{ maxWidth: '600px', margin: '0 auto' }}>
      <div className="question-header">
        <h2>Q7: Complete Authentication System</h2>
        <div className="question-desc">
          Sign-Up and Sign-In flow. Access the main page only if credentials match.
        </div>
      </div>

      {view === 'main' ? (
        <div style={{ textAlign: 'center', padding: '2rem 0' }}>
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎉</div>
          <h2 style={{ color: '#f0abfc' }}>Welcome to the Main Dashboard</h2>
          <p>Hello, <strong>{loggedInUser}</strong>! You have successfully logged in.</p>
          <button style={{ marginTop: '2rem' }} className="danger" onClick={handleLogout}>Log Out</button>
        </div>
      ) : (
        <div>
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>
            <h3
              style={{ cursor: 'pointer', color: view === 'signup' ? '#d946ef' : '#a79cb5', textDecoration: view === 'signup' ? 'underline' : 'none' }}
              onClick={() => setView('signup')}
            >
              Sign Up
            </h3>
            <h3
              style={{ cursor: 'pointer', color: view === 'signin' ? '#d946ef' : '#a79cb5', textDecoration: view === 'signin' ? 'underline' : 'none' }}
              onClick={() => setView('signin')}
            >
              Sign In
            </h3>
          </div>

          <form onSubmit={view === 'signup' ? handleSignUp : handleSignIn}>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" style={{ width: '100%' }}>
              {view === 'signup' ? 'Create Account' : 'Login to Dashboard'}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
