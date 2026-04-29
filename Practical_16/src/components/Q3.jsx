import React, { useState, Component } from 'react';

const calculateBillDetails = (units) => {
  let pricePerUnit = 0;
  if (units > 0 && units <= 100) pricePerUnit = 4;
  else if (units > 100 && units <= 300) pricePerUnit = 8;
  else if (units > 300) pricePerUnit = 10;

  const baseBill = units * pricePerUnit;
  // Based on "5% of total consumed unit" literal text:
  const greeneryTax = units * 0.05;
  const educationTax = units * 0.02;
  const serviceTax = units * 0.01;
  const normalTax = units * 0.10;
  
  const totalBill = baseBill + greeneryTax + educationTax + serviceTax + normalTax;

  return {
    baseBill: baseBill.toFixed(2),
    greeneryTax: greeneryTax.toFixed(2),
    educationTax: educationTax.toFixed(2),
    serviceTax: serviceTax.toFixed(2),
    normalTax: normalTax.toFixed(2),
    totalBill: totalBill.toFixed(2),
  };
};

const Q3Functional = () => {
  const [units, setUnits] = useState('');
  const [details, setDetails] = useState({
    baseBill: '', greeneryTax: '', educationTax: '', serviceTax: '', normalTax: '', totalBill: ''
  });

  const handleCalculate = () => {
    const u = parseFloat(units);
    if (isNaN(u) || u < 0) return;
    setDetails(calculateBillDetails(u));
  };

  return (
    <div>
      <h4>Functional Component Implementation</h4>
      <div className="form-group">
        <label>Total Consumed Units</label>
        <input type="number" value={units} onChange={(e) => setUnits(e.target.value)} />
      </div>
      <button onClick={handleCalculate}>Calculate Bill</button>

      <div className="grid-2" style={{ marginTop: '1.5rem' }}>
        <div className="form-group">
          <label>Base Bill Amount</label>
          <input type="text" readOnly value={details.baseBill} />
        </div>
        <div className="form-group">
          <label>Greenery Tax (5% of units)</label>
          <input type="text" readOnly value={details.greeneryTax} />
        </div>
        <div className="form-group">
          <label>Education Tax (2% of units)</label>
          <input type="text" readOnly value={details.educationTax} />
        </div>
        <div className="form-group">
          <label>Service Tax (1% of units)</label>
          <input type="text" readOnly value={details.serviceTax} />
        </div>
        <div className="form-group">
          <label>Normal Tax (10% of units)</label>
          <input type="text" readOnly value={details.normalTax} />
        </div>
        <div className="form-group">
          <label>Total Bill Amount</label>
          <input type="text" readOnly value={details.totalBill} style={{ borderColor: '#10b981', color: '#10b981' }} />
        </div>
      </div>
    </div>
  );
};

class Q3Class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      units: '',
      details: { baseBill: '', greeneryTax: '', educationTax: '', serviceTax: '', normalTax: '', totalBill: '' }
    };
  }

  handleCalculate = () => {
    const u = parseFloat(this.state.units);
    if (isNaN(u) || u < 0) return;
    this.setState({ details: calculateBillDetails(u) });
  };

  render() {
    const { units, details } = this.state;
    return (
      <div>
        <h4>Class Component Implementation</h4>
        <div className="form-group">
          <label>Total Consumed Units</label>
          <input type="number" value={units} onChange={(e) => this.setState({ units: e.target.value })} />
        </div>
        <button onClick={this.handleCalculate}>Calculate Bill</button>

        <div className="grid-2" style={{ marginTop: '1.5rem' }}>
          <div className="form-group">
            <label>Base Bill Amount</label>
            <input type="text" readOnly value={details.baseBill} />
          </div>
          <div className="form-group">
            <label>Greenery Tax (5% of units)</label>
            <input type="text" readOnly value={details.greeneryTax} />
          </div>
          <div className="form-group">
            <label>Education Tax (2% of units)</label>
            <input type="text" readOnly value={details.educationTax} />
          </div>
          <div className="form-group">
            <label>Service Tax (1% of units)</label>
            <input type="text" readOnly value={details.serviceTax} />
          </div>
          <div className="form-group">
            <label>Normal Tax (10% of units)</label>
            <input type="text" readOnly value={details.normalTax} />
          </div>
          <div className="form-group">
            <label>Total Bill Amount</label>
            <input type="text" readOnly value={details.totalBill} style={{ borderColor: '#10b981', color: '#10b981' }} />
          </div>
        </div>
      </div>
    );
  }
}

export default function Q3() {
  const [active, setActive] = useState('functional');

  return (
    <div className="card">
      <div className="question-header">
        <h2>Q3: Electricity Bill Calculator</h2>
        <div className="question-desc">
          Calculate greenery tax, education tax, normal tax based on consumed units and display values in text fields.
        </div>
      </div>

      <div className="component-toggle">
        <button 
          className={`toggle-btn ${active === 'functional' ? 'active' : ''}`}
          onClick={() => setActive('functional')}
        >
          Functional
        </button>
        <button 
          className={`toggle-btn ${active === 'class' ? 'active' : ''}`}
          onClick={() => setActive('class')}
        >
          Class
        </button>
      </div>

      {active === 'functional' ? <Q3Functional /> : <Q3Class />}
    </div>
  );
}
