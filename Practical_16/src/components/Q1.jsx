import React, { useState, Component } from 'react';

// Functional Component
const Q1Functional = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [results, setResults] = useState(null);

  const calculate = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    if (isNaN(n1) || isNaN(n2)) return;
    
    setResults({
      add: n1 + n2,
      sub: n1 - n2,
      mul: n1 * n2,
      div: n2 !== 0 ? (n1 / n2).toFixed(2) : 'Infinity'
    });
  };

  return (
    <div>
      <h4>Functional Component Implementation</h4>
      <div className="grid-2">
        <div className="form-group">
          <label>Number 1</label>
          <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Number 2</label>
          <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} />
        </div>
      </div>
      <button onClick={calculate}>Calculate Operations</button>

      {results && (
        <div className="result-box grid-2">
          <div>Addition: {results.add}</div>
          <div>Subtraction: {results.sub}</div>
          <div>Multiplication: {results.mul}</div>
          <div>Division: {results.div}</div>
        </div>
      )}
    </div>
  );
};

// Class Component
class Q1Class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: '',
      num2: '',
      results: null
    };
  }

  calculate = () => {
    const n1 = parseFloat(this.state.num1);
    const n2 = parseFloat(this.state.num2);
    if (isNaN(n1) || isNaN(n2)) return;

    this.setState({
      results: {
        add: n1 + n2,
        sub: n1 - n2,
        mul: n1 * n2,
        div: n2 !== 0 ? (n1 / n2).toFixed(2) : 'Infinity'
      }
    });
  };

  render() {
    return (
      <div>
        <h4>Class Component Implementation</h4>
        <div className="grid-2">
          <div className="form-group">
            <label>Number 1</label>
            <input 
              type="number" 
              value={this.state.num1} 
              onChange={(e) => this.setState({ num1: e.target.value })} 
            />
          </div>
          <div className="form-group">
            <label>Number 2</label>
            <input 
              type="number" 
              value={this.state.num2} 
              onChange={(e) => this.setState({ num2: e.target.value })} 
            />
          </div>
        </div>
        <button onClick={this.calculate}>Calculate Operations</button>

        {this.state.results && (
          <div className="result-box grid-2">
            <div>Addition: {this.state.results.add}</div>
            <div>Subtraction: {this.state.results.sub}</div>
            <div>Multiplication: {this.state.results.mul}</div>
            <div>Division: {this.state.results.div}</div>
          </div>
        )}
      </div>
    );
  }
}

// Wrapper Component
export default function Q1() {
  const [active, setActive] = useState('functional');

  return (
    <div className="card">
      <div className="question-header">
        <h2>Q1: Calculator</h2>
        <div className="question-desc">
          Display the addition, subtraction, multiplication, and division of any random given two numbers.
          Implemented using both functional and class components separately.
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

      {active === 'functional' ? <Q1Functional /> : <Q1Class />}
    </div>
  );
}
