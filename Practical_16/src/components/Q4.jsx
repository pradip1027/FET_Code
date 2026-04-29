import React, { useState } from 'react';

export default function Q4() {
  const [basic, setBasic] = useState('');
  const [details, setDetails] = useState(null);
  const [error, setError] = useState('');

  const calculateSalary = () => {
    const b = parseFloat(basic);
    setError('');
    setDetails(null);

    if (isNaN(b) || b <= 0) {
      setError('Please enter a valid basic salary greater than 0.');
      return;
    }

    if (b > 100000) {
      setError("Company won't provide basic salary more than 100000.");
      return;
    }

    let daPct = 0, hraPct = 0, pfPct = 0;

    if (b <= 5000) {
      daPct = 0.10;
      hraPct = 0.15;
      pfPct = 0.05;
    } else if (b <= 50000) {
      daPct = 0.15;
      hraPct = 0.20;
      pfPct = 0.10;
    } else if (b <= 100000) {
      daPct = 0.20;
      hraPct = 0.25;
      pfPct = 0.15;
    }

    const da = b * daPct;
    const hra = b * hraPct;
    const gs = b + da + hra;
    const pf = gs * pfPct;
    const net = gs - pf;

    setDetails({
      da: da.toFixed(2),
      hra: hra.toFixed(2),
      gs: gs.toFixed(2),
      pf: pf.toFixed(2),
      net: net.toFixed(2),
    });
  };

  return (
    <div className="card">
      <div className="question-header">
        <h2>Q4: Salary Calculation</h2>
        <div className="question-desc">
          Accept basic salary and calculate DA, HRA, Gross Salary, PF, and Net Salary based on given conditions.
        </div>
      </div>

      <div className="form-group">
        <label>Basic Salary</label>
        <input 
          type="number" 
          value={basic} 
          onChange={(e) => setBasic(e.target.value)} 
          placeholder="Enter basic salary"
        />
      </div>
      
      <button onClick={calculateSalary}>Calculate Net Salary</button>

      {error && <div className="error-box">{error}</div>}

      {details && (
        <div className="grid-2" style={{ marginTop: '1.5rem' }}>
          <div className="form-group">
            <label>DA Amount</label>
            <input type="text" readOnly value={details.da} />
          </div>
          <div className="form-group">
            <label>HRA Amount</label>
            <input type="text" readOnly value={details.hra} />
          </div>
          <div className="form-group">
            <label>Gross Salary (GS)</label>
            <input type="text" readOnly value={details.gs} />
          </div>
          <div className="form-group">
            <label>PF Amount</label>
            <input type="text" readOnly value={details.pf} />
          </div>
          <div className="form-group" style={{ gridColumn: '1 / -1' }}>
            <label>Net Salary</label>
            <input 
              type="text" 
              readOnly 
              value={details.net} 
              style={{ borderColor: '#6366f1', color: '#818cf8', fontSize: '1.1rem', fontWeight: 'bold' }} 
            />
          </div>
        </div>
      )}
    </div>
  );
}
