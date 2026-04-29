import React, { useState } from 'react';
import Theory from './components/Theory';
import Auth from './components/Auth';
import StudentCRUD from './components/StudentCRUD';

export default function App() {
  const [activeTab, setActiveTab] = useState('theory');
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
    setActiveTab('crud'); // Navigate to home page on login
  };

  const handleLogout = () => {
    setUser(null);
    setActiveTab('auth');
  };

  return (
    <div className="app-container">
      <div className="header">
        <h1>Practical 19: React & MongoDB Full Stack</h1>
        {user && (
          <div>
            <span style={{ marginRight: '15px', color: '#03dac6' }}>
              Welcome, {user.name}!
            </span>
            <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
          </div>
        )}
      </div>

      <div className="nav-tabs">
        <button 
          className={activeTab === 'theory' ? 'active' : ''} 
          onClick={() => setActiveTab('theory')}
        >
          1. Theory Questions
        </button>
        <button 
          className={activeTab === 'auth' ? 'active' : ''} 
          onClick={() => setActiveTab('auth')}
        >
          2. Auth System
        </button>
        <button 
          className={activeTab === 'crud' ? 'active' : ''} 
          onClick={() => setActiveTab('crud')}
        >
          3. Student CRUD
        </button>
      </div>

      <main>
        {activeTab === 'theory' && <Theory />}
        {activeTab === 'auth' && <Auth onLogin={handleLogin} user={user} />}
        {activeTab === 'crud' && <StudentCRUD user={user} onRequireAuth={() => setActiveTab('auth')} />}
      </main>
    </div>
  );
}
