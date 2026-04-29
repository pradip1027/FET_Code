import React, { Component } from 'react';

// Child Component receiving props
class InterestResult extends Component {
  render() {
    const { principal, rate, time, simpleInterest, compoundInterest } = this.props;
    
    return (
      <div className="result-box grid-2" style={{ marginTop: '2rem' }}>
        <div style={{ gridColumn: '1 / -1', marginBottom: '1rem' }}>
          <strong>Principal:</strong> ₹{principal} | <strong>Rate:</strong> {rate}% | <strong>Time:</strong> {time} years
        </div>
        <div>
          <h4>Simple Interest</h4>
          <div style={{ fontSize: '1.5rem', color: '#10b981' }}>₹{simpleInterest}</div>
        </div>
        <div>
          <h4>Compound Interest</h4>
          <div style={{ fontSize: '1.5rem', color: '#8b5cf6' }}>₹{compoundInterest}</div>
        </div>
      </div>
    );
  }
}

export default class Q2 extends Component {
  constructor(props) {
    super(props);
    // Initializing state in constructor
    this.state = {
      principal: '',
      rate: '',
      time: '',
      simpleInterest: null,
      compoundInterest: null,
    };
    
    // Binding methods
    this.handleChange = this.handleChange.bind(this);
    this.calculateInterest = this.calculateInterest.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  calculateInterest(e) {
    e.preventDefault();
    const { principal, rate, time } = this.state;
    
    const p = parseFloat(principal);
    const r = parseFloat(rate);
    const t = parseFloat(time);

    if (isNaN(p) || isNaN(r) || isNaN(t)) {
      alert("Please enter valid numeric values for all fields.");
      return;
    }

    // SI = (P * R * T) / 100
    const si = (p * r * t) / 100;
    
    // CI = P * (1 + R / 100)^T - P
    const ci = p * Math.pow((1 + r / 100), t) - p;

    this.setState({
      simpleInterest: si.toFixed(2),
      compoundInterest: ci.toFixed(2)
    });
  }

  render() {
    return (
      <div className="card">
        <div className="question-header">
          <h2>Q2: Interest Calculator</h2>
          <div className="question-desc">
            Calculates Simple and Compound Interest. Implemented using a Class Component (Constructor, State, and Props).
          </div>
        </div>

        <form onSubmit={this.calculateInterest}>
          <div className="grid-3">
            <div className="form-group">
              <label>Principal Amount (₹)</label>
              <input 
                type="number" 
                name="principal"
                value={this.state.principal} 
                onChange={this.handleChange} 
                required
              />
            </div>
            <div className="form-group">
              <label>Rate of Interest (%)</label>
              <input 
                type="number" 
                name="rate"
                value={this.state.rate} 
                onChange={this.handleChange} 
                required
              />
            </div>
            <div className="form-group">
              <label>Time (Years)</label>
              <input 
                type="number" 
                name="time"
                value={this.state.time} 
                onChange={this.handleChange} 
                required
              />
            </div>
          </div>
          <button type="submit">Calculate Interest</button>
        </form>

        {this.state.simpleInterest !== null && (
          <InterestResult 
            principal={this.state.principal}
            rate={this.state.rate}
            time={this.state.time}
            simpleInterest={this.state.simpleInterest}
            compoundInterest={this.state.compoundInterest}
          />
        )}
      </div>
    );
  }
}
