import React, { useState, useEffect } from 'react';

export default function Q6() {
  const [product, setProduct] = useState({
    id: '', name: '', qty: '', price: '', total: 0
  });
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    const q = parseFloat(product.qty) || 0;
    const p = parseFloat(product.price) || 0;
    setProduct(prev => ({ ...prev, total: q * p }));
  }, [product.qty, product.price]);

  const handleAdd = () => {
    if (!product.id || !product.name || !product.qty || !product.price) {
      alert("Please fill in all product details");
      return;
    }
    setProductsList([...productsList, product]);
    setProduct({ id: '', name: '', qty: '', price: '', total: 0 }); // reset
  };

  return (
    <div className="card">
      <div className="question-header">
        <h2>Q6: Product Billing Form</h2>
        <div className="question-desc">
          Enter product ID, name, quantity, and price. Total is calculated automatically. Display details in a table on submit.
        </div>
      </div>

      <div className="grid-2">
        <div className="form-group">
          <label>Product ID</label>
          <input 
            type="text" 
            value={product.id} 
            onChange={(e) => setProduct({...product, id: e.target.value})} 
          />
        </div>
        <div className="form-group">
          <label>Product Name</label>
          <input 
            type="text" 
            value={product.name} 
            onChange={(e) => setProduct({...product, name: e.target.value})} 
          />
        </div>
        <div className="form-group">
          <label>Quantity</label>
          <input 
            type="number" 
            value={product.qty} 
            onChange={(e) => setProduct({...product, qty: e.target.value})} 
          />
        </div>
        <div className="form-group">
          <label>Price</label>
          <input 
            type="number" 
            value={product.price} 
            onChange={(e) => setProduct({...product, price: e.target.value})} 
          />
        </div>
        <div className="form-group" style={{ gridColumn: '1 / -1' }}>
          <label>Total Price (Auto-calculated)</label>
          <input 
            type="number" 
            value={product.total} 
            readOnly 
            style={{ backgroundColor: 'rgba(99, 102, 241, 0.1)', color: '#818cf8', fontWeight: 'bold' }}
          />
        </div>
      </div>

      <button onClick={handleAdd}>Add to Bill</button>

      {productsList.length > 0 && (
        <div style={{ marginTop: '2rem' }}>
          <h3>Billing Details</h3>
          <table>
            <thead>
              <tr>
                <th>Product ID</th>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {productsList.map((item, idx) => (
                <tr key={idx}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.qty}</td>
                  <td>₹{item.price}</td>
                  <td>₹{item.total}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="4" style={{ textAlign: 'right', fontWeight: 'bold' }}>Grand Total:</td>
                <td style={{ fontWeight: 'bold', color: '#10b981' }}>
                  ₹{productsList.reduce((acc, curr) => acc + curr.total, 0)}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      )}
    </div>
  );
}
