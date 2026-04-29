import React from 'react';
import { Routes, Route, NavLink, Outlet } from 'react-router-dom';

const HomeMain = () => <div className="content-box"><h2>Welcome to the Home Page!</h2><p>Please select a link above.</p></div>;
const About = () => <div className="content-box"><h2>About Us</h2><p>Information about our company.</p></div>;
const Contact = () => <div className="content-box"><h2>Contact Us</h2><p>Email: test@example.com | Phone: 123-456-7890</p></div>;
const ImageGallery = () => (
  <div className="content-box">
    <h2>Image Gallery</h2>
    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '1rem' }}>
      <div style={{ width: '100px', height: '100px', background: '#3b82f6', borderRadius: '8px' }}></div>
      <div style={{ width: '100px', height: '100px', background: '#ef4444', borderRadius: '8px' }}></div>
      <div style={{ width: '100px', height: '100px', background: '#10b981', borderRadius: '8px' }}></div>
    </div>
  </div>
);
const LoginComp = () => <div className="content-box"><h2>Login Page</h2><p>Please enter your credentials here.</p></div>;
const LogoutComp = () => <div className="content-box"><h2>Logout</h2><p>You have been successfully logged out.</p></div>;

export default function Q3() {
  return (
    <div className="card">
      <h2>Q3: Basic Link Routing</h2>
      <p>Demonstrating links that change the content displayed on the Home page.</p>

      <nav className="sub-nav">
        <NavLink to="/q3" end>Home</NavLink>
        <NavLink to="/q3/about">About</NavLink>
        <NavLink to="/q3/contact">Contact</NavLink>
        <NavLink to="/q3/gallery">Image Gallery</NavLink>
        <NavLink to="/q3/login">Login</NavLink>
        <NavLink to="/q3/logout">Logout</NavLink>
      </nav>

      <div style={{ marginTop: '2rem' }}>
        <Routes>
          <Route path="/" element={<HomeMain />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="gallery" element={<ImageGallery />} />
          <Route path="login" element={<LoginComp />} />
          <Route path="logout" element={<LogoutComp />} />
        </Routes>
      </div>
    </div>
  );
}
