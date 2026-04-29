import React, { useState, Component } from 'react';

const calculateStats = (numbersArray) => {
  const vals = numbersArray.map(n => parseFloat(n)).filter(n => !isNaN(n));
  if (vals.length !== 10) return null;

  const sum = vals.reduce((acc, curr) => acc + curr, 0);
  const avg = sum / vals.length;
  const max = Math.max(...vals);
  const min = Math.min(...vals);

  return { sum, avg, max, min };
};

const Q5Functional = () => {
  const [numbers, setNumbers] = useState(Array(10).fill(''));
  const [stats, setStats] = useState(null);

  const handleChange = (index, value) => {
    const newNumbers = [...numbers];
    newNumbers[index] = value;
    setNumbers(newNumbers);
  };

  const handleCalculate = () => {
    const result = calculateStats(numbers);
    if (!result) {
      alert("Please enter all 10 valid numbers.");
      return;
    }
    setStats(result);
  };

  return (
    <div>
      <h4>Functional Component Implementation</h4>
      <div className="grid-3" style={{ gridTemplateColumns: 'repeat(5, 1fr)' }}>
        {numbers.map((num, i) => (
          <div className="form-group" key={i}>
            <label>Num {i + 1}</label>
            <input 
              type="number" 
              value={num} 
              onChange={(e) => handleChange(i, e.target.value)} 
            />
          </div>
        ))}
      </div>
      <button onClick={handleCalculate}>Calculate Stats</button>

      {stats && (
        <div className="result-box grid-2" style={{ marginTop: '1.5rem' }}>
          <div><strong>Sum:</strong> {stats.sum}</div>
          <div><strong>Average:</strong> {stats.avg}</div>
          <div><strong>Highest:</strong> {stats.max}</div>
          <div><strong>Lowest:</strong> {stats.min}</div>
        </div>
      )}
    </div>
  );
};

class Q5Class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numbers: Array(10).fill(''),
      stats: null
    };
  }

  handleChange = (index, value) => {
    const newNumbers = [...this.state.numbers];
    newNumbers[index] = value;
    this.setState({ numbers: newNumbers });
  };

  handleCalculate = () => {
    const result = calculateStats(this.state.numbers);
    if (!result) {
      alert("Please enter all 10 valid numbers.");
      return;
    }
    this.setState({ stats: result });
  };

  render() {
    return (
      <div>
        <h4>Class Component Implementation</h4>
        <div className="grid-3" style={{ gridTemplateColumns: 'repeat(5, 1fr)' }}>
          {this.state.numbers.map((num, i) => (
            <div className="form-group" key={i}>
              <label>Num {i + 1}</label>
              <input 
                type="number" 
                value={num} 
                onChange={(e) => this.handleChange(i, e.target.value)} 
              />
            </div>
          ))}
        </div>
        <button onClick={this.handleCalculate}>Calculate Stats</button>

        {this.state.stats && (
          <div className="result-box grid-2" style={{ marginTop: '1.5rem' }}>
            <div><strong>Sum:</strong> {this.state.stats.sum}</div>
            <div><strong>Average:</strong> {this.state.stats.avg}</div>
            <div><strong>Highest:</strong> {this.state.stats.max}</div>
            <div><strong>Lowest:</strong> {this.state.stats.min}</div>
          </div>
        )}
      </div>
    );
  }
}

export default function Q5() {
  const [active, setActive] = useState('functional');

  return (
    <div className="card">
      <div className="question-header">
        <h2>Q5: Array Statistics</h2>
        <div className="question-desc">
          Read any random 10 numbers and find the addition, average, highest, and lowest value among them.
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

      {active === 'functional' ? <Q5Functional /> : <Q5Class />}
    </div>
  );
}
