import React, { useState } from 'react';

export default function Q2() {
  const [numbers, setNumbers] = useState({ n1: '', n2: '', n3: '' });
  const [result, setResult] = useState(null);

  const findHighLow = () => {
    const { n1, n2, n3 } = numbers;
    const vals = [parseInt(n1), parseInt(n2), parseInt(n3)];
    
    if (vals.some(isNaN)) {
      alert("Please enter valid integers in all fields");
      return;
    }

    const max = Math.max(...vals);
    const min = Math.min(...vals);

    setResult({ max, min });
  };

  return (
    <div className="card">
      <div className="question-header">
        <h2>Q2: Highest & Lowest Number</h2>
        <div className="question-desc">
          Read three numbers from the user and find the highest and least values on button click.
        </div>
      </div>

      <div className="grid-3">
        <div className="form-group">
          <label>Number 1</label>
          <input 
            type="number" 
            value={numbers.n1} 
            onChange={(e) => setNumbers({...numbers, n1: e.target.value})} 
          />
        </div>
        <div className="form-group">
          <label>Number 2</label>
          <input 
            type="number" 
            value={numbers.n2} 
            onChange={(e) => setNumbers({...numbers, n2: e.target.value})} 
          />
        </div>
        <div className="form-group">
          <label>Number 3</label>
          <input 
            type="number" 
            value={numbers.n3} 
            onChange={(e) => setNumbers({...numbers, n3: e.target.value})} 
          />
        </div>
      </div>
      
      <button onClick={findHighLow}>Find Highest & Lowest</button>

      {result && (
        <div className="result-box grid-2">
          <div><strong>Highest Value:</strong> {result.max}</div>
          <div><strong>Lowest Value:</strong> {result.min}</div>
        </div>
      )}
    </div>
  );
}
