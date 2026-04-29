import React, { useReducer, useState } from 'react';

// useReducer setup
const initialState = {
  basic: '',
  hra: 0,
  da: 0,
  pf: 0,
  gross: 0,
  net: 0,
  error: ''
};

const payrollReducer = (state, action) => {
  switch (action.type) {
    case 'CALCULATE':
      const b = parseFloat(action.payload);
      if (isNaN(b) || b <= 0) {
        return { ...initialState, error: "Please enter a valid basic salary." };
      }
      
      let hraPct = 0, daPct = 0, pfPct = 0;

      if (b >= 2500 && b <= 5000) {
        hraPct = 0.05;
        daPct = 0.10;
        pfPct = 0.05;
      } else if (b > 5000 && b <= 10000) {
        hraPct = 0.10;
        daPct = 0.15;
        pfPct = 0.10;
      } else {
        return { ...initialState, error: "Basic salary should not be accepted (Must be between 2500 and 10000)." };
      }

      const hra = b * hraPct;
      const da = b * daPct;
      const pf = b * pfPct;
      const gross = b + hra + da;
      const net = gross - pf;

      return {
        basic: b,
        hra, da, pf, gross, net, error: ''
      };

    case 'RESET':
      return initialState;

    default:
      return state;
  }
};

export default function Q5() {
  const [basicInput, setBasicInput] = useState('');
  const [state, dispatch] = useReducer(payrollReducer, initialState);

  const handleCalculate = (e) => {
    e.preventDefault();
    dispatch({ type: 'CALCULATE', payload: basicInput });
  };

  return (
    <div className="card">
      <div className="question-header">
        <h2>Q5: Employee Payroll Management</h2>
        <div className="question-desc">
          Calculates gross and net salary based on specific rules. Implemented using <strong>useReducer</strong> hook.
        </div>
      </div>

      <form onSubmit={handleCalculate} style={{ marginBottom: '2rem' }}>
        <div className="form-group">
          <label>Basic Salary (₹)</label>
          <input 
            type="number" 
            value={basicInput} 
            onChange={(e) => setBasicInput(e.target.value)} 
            placeholder="Enter salary between 2500 and 10000"
          />
        </div>
        <button type="submit">Calculate Payroll</button>
      </form>

      {state.error && <div className="error-box">{state.error}</div>}

      {!state.error && state.gross > 0 && (
        <div className="grid-2">
          <div className="form-group">
            <label>HRA Amount</label>
            <input type="text" readOnly value={`₹${state.hra.toFixed(2)}`} />
          </div>
          <div className="form-group">
            <label>DA Amount</label>
            <input type="text" readOnly value={`₹${state.da.toFixed(2)}`} />
          </div>
          <div className="form-group">
            <label>PF Deduction</label>
            <input type="text" readOnly value={`₹${state.pf.toFixed(2)}`} />
          </div>
          <div className="form-group">
            <label>Gross Salary</label>
            <input type="text" readOnly value={`₹${state.gross.toFixed(2)}`} />
          </div>
          <div className="form-group" style={{ gridColumn: '1 / -1' }}>
            <label>Net Salary (Take-home)</label>
            <input 
              type="text" 
              readOnly 
              value={`₹${state.net.toFixed(2)}`} 
              style={{ backgroundColor: 'rgba(217, 70, 239, 0.1)', color: '#f0abfc', fontWeight: 'bold', fontSize: '1.2rem' }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
