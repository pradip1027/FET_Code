import React, { useState } from 'react';

export default function Q4() {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({ id: '', name: '', qty: '', price: '' });
  const [editingId, setEditingId] = useState(null);

  const calculateTotal = (qty, price) => (parseFloat(qty) || 0) * (parseFloat(price) || 0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (!formData.id || !formData.name) {
      alert("ID and Name are required.");
      return;
    }

    const total = calculateTotal(formData.qty, formData.price);
    const newProduct = { ...formData, total };

    if (editingId) {
      // Edit existing
      setProducts(products.map(p => p.id === editingId ? newProduct : p));
      setEditingId(null);
    } else {
      // Check if ID already exists
      if (products.find(p => p.id === formData.id)) {
        alert("Product ID already exists!");
        return;
      }
      // Add new
      setProducts([...products, newProduct]);
    }
    setFormData({ id: '', name: '', qty: '', price: '' });
  };

  const handleEdit = (product) => {
    setFormData({ id: product.id, name: product.name, qty: product.qty, price: product.price });
    setEditingId(product.id);
  };

  const handleDelete = (id) => {
    setProducts(products.filter(p => p.id !== id));
  };

  return (
    <div className="card">
      <div className="question-header">
        <h2>Q4: Product Management System</h2>
        <div className="question-desc">
          Calculates and displays the total price, shows all products in a table. Includes EDIT and DELETE functionality using useState.
        </div>
      </div>

      <form onSubmit={handleSave}>
        <div className="grid-2">
          <div className="form-group">
            <label>Product ID</label>
            <input 
              type="text" 
              name="id" 
              value={formData.id} 
              onChange={handleChange} 
              disabled={editingId !== null} // Prevent changing ID when editing
            />
          </div>
          <div className="form-group">
            <label>Product Name</label>
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
            />
          </div>
          <div className="form-group">
            <label>Quantity</label>
            <input 
              type="number" 
              name="qty" 
              value={formData.qty} 
              onChange={handleChange} 
            />
          </div>
          <div className="form-group">
            <label>Price per unit</label>
            <input 
              type="number" 
              name="price" 
              value={formData.price} 
              onChange={handleChange} 
            />
          </div>
        </div>
        <div className="flex-gap">
          <button type="submit">{editingId ? 'Update Product' : 'Add Product'}</button>
          {editingId && (
            <button 
              type="button" 
              className="warning"
              onClick={() => { setEditingId(null); setFormData({ id: '', name: '', qty: '', price: '' }); }}
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      {products.length > 0 && (
        <div style={{ marginTop: '3rem' }}>
          <h3>Inventory Table</h3>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Product Name</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Total</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map(p => (
                <tr key={p.id}>
                  <td>{p.id}</td>
                  <td>{p.name}</td>
                  <td>{p.qty}</td>
                  <td>₹{p.price}</td>
                  <td>₹{p.total}</td>
                  <td>
                    <div className="flex-gap">
                      <button 
                        type="button" 
                        style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}
                        onClick={() => handleEdit(p)}
                      >
                        Edit
                      </button>
                      <button 
                        type="button" 
                        className="danger"
                        style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}
                        onClick={() => handleDelete(p.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="4" style={{ textAlign: 'right', fontWeight: 'bold' }}>Grand Total:</td>
                <td colSpan="2" style={{ fontWeight: 'bold', color: '#10b981' }}>
                  ₹{products.reduce((acc, curr) => acc + curr.total, 0)}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      )}
    </div>
  );
}
