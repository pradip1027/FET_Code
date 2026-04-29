import React from 'react';
import { Routes, Route, Link, Outlet } from 'react-router-dom';

// Layout component that provides the nested Outlet
const ProductsLayout = () => {
  return (
    <div>
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
        <Link to="electronics"><button>Electronics</button></Link>
        <Link to="clothing"><button>Clothing</button></Link>
        <Link to="books"><button>Books</button></Link>
      </div>
      {/* Outlet acts as a placeholder for child routes */}
      <div style={{ border: '2px solid #334155', borderRadius: '8px', padding: '2rem' }}>
        <Outlet />
      </div>
    </div>
  );
};

// Child components
const Electronics = () => <div><h3>Electronics Department</h3><p>Laptops, Phones, and Accessories.</p></div>;
const Clothing = () => <div><h3>Clothing Department</h3><p>Shirts, Pants, and Shoes.</p></div>;
const Books = () => <div><h3>Books Department</h3><p>Novels, Textbooks, and Comics.</p></div>;
const DefaultView = () => <div style={{ color: '#94a3b8' }}>Please select a product category above to view details.</div>;

export default function Q4() {
  return (
    <div className="card">
      <h2>Q4: Nested Routes & Switch Conditions</h2>
      <p style={{ marginBottom: '2rem' }}>
        In React Router v6, <code>Routes</code> replaces <code>Switch</code>, and nested routes are easily implemented using the <code>Outlet</code> component.
      </p>

      {/* Internal Routing configuration mapping nested paths to components */}
      <Routes>
        <Route path="/" element={<ProductsLayout />}>
          {/* Default child route */}
          <Route index element={<DefaultView />} />
          
          {/* Switch-case like conditions based on the path */}
          <Route path="electronics" element={<Electronics />} />
          <Route path="clothing" element={<Clothing />} />
          <Route path="books" element={<Books />} />
          
          {/* Default/Not Found fallback case */}
          <Route path="*" element={<h3 style={{ color: '#f43f5e' }}>Category Not Found!</h3>} />
        </Route>
      </Routes>
    </div>
  );
}
