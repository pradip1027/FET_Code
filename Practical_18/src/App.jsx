import React from 'react';
import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import Q1 from './components/Q1';
import Q2 from './components/Q2';
import Q3 from './components/Q3';
import Q4 from './components/Q4';

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">
        <aside className="sidebar">
          <h1 className="sidebar-title">Practical 18</h1>
          <nav>
            <NavLink to="/q1" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
              Q1: Router Concepts
            </NavLink>
            <NavLink to="/q2" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
              Q2: Auth System
            </NavLink>
            <NavLink to="/q3" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
              Q3: Basic Routing
            </NavLink>
            <NavLink to="/q4" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
              Q4: Nested Routes
            </NavLink>
          </nav>
        </aside>
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Navigate to="/q1" replace />} />
            <Route path="/q1" element={<Q1 />} />
            <Route path="/q2/*" element={<Q2 />} />
            <Route path="/q3/*" element={<Q3 />} />
            <Route path="/q4/*" element={<Q4 />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
