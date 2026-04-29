import React, { useState } from 'react';

// Child component receiving props
const CalculatorDisplay = ({ num1, num2, operation, result }) => {
  return (
    <div className="result-box" style={{ marginTop: '2rem' }}>
      <h3>Calculation Result via Props</h3>
      <div style={{ marginTop: '1rem', fontSize: '1.2rem' }}>
        {num1} {operation} {num2} = <strong>{result !== null ? result : '?'}</strong>
      </div>
    </div>
  );
};

export default function Q1() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operation, setOperation] = useState('+');
  const [result, setResult] = useState(null);

  const calculate = (e) => {
    e.preventDefault();
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    
    if (isNaN(n1) || isNaN(n2)) {
      alert('Please enter valid numbers');
      return;
    }

    let res = 0;
    switch (operation) {
      case '+': res = n1 + n2; break;
      case '-': res = n1 - n2; break;
      case '*': res = n1 * n2; break;
      case '/': res = n2 !== 0 ? (n1 / n2).toFixed(2) : 'Infinity'; break;
      default: res = 0;
    }
    setResult(res);
  };

  return (
    <div className="card">
      <div className="question-header">
        <h2>Q1: Calculator using useState & Props</h2>
        <div className="question-desc">
          A calculator program that demonstrates the use of the useState hook and passing data via props to a child component.
        </div>
      </div>

      <form onSubmit={calculate}>
        <div className="grid-3">
          <div className="form-group">
            <label>Number 1</label>
            <input 
              type="number" 
              value={num1} 
              onChange={(e) => setNum1(e.target.value)} 
              required
            />
          </div>
          <div className="form-group">
            <label>Operation</label>
            <select value={operation} onChange={(e) => setOperation(e.target.value)}>
              <option value="+">Addition (+)</option>
              <option value="-">Subtraction (-)</option>
              <option value="*">Multiplication (*)</option>
              <option value="/">Division (/)</option>
            </select>
          </div>
          <div className="form-group">
            <label>Number 2</label>
            <input 
              type="number" 
              value={num2} 
              onChange={(e) => setNum2(e.target.value)} 
              required
            />
          </div>
        </div>
        <button type="submit">Calculate</button>
      </form>

      {/* Passing state as props */}
      {result !== null && (
        <CalculatorDisplay 
          num1={num1} 
          num2={num2} 
          operation={operation} 
          result={result} 
        />
      )}
    </div>
  );
}
