import React, { useState, useEffect, useRef, useReducer, useContext, createContext } from 'react';

// --- 1. useContext Demo Setup ---
const ThemeContext = createContext();

const ContextDemo = () => {
  const theme = useContext(ThemeContext);
  return (
    <div style={{ padding: '1rem', background: theme === 'dark' ? '#1f2937' : '#f3f4f6', color: theme === 'dark' ? 'white' : 'black', borderRadius: '8px' }}>
      <strong>useContext:</strong> Current theme is {theme}. This component doesn't receive props directly!
    </div>
  );
};

// --- 2. useReducer Demo Setup ---
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment': return { count: state.count + 1 };
    case 'decrement': return { count: state.count - 1 };
    default: return state;
  }
};

export default function Q6() {
  // useEffect Demo
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setSeconds(s => s + 1), 1000);
    return () => clearInterval(timer); // Cleanup
  }, []);

  // useContext Demo state
  const [theme, setTheme] = useState('dark');

  // useRef Demo
  const inputRef = useRef(null);
  const handleFocus = () => {
    inputRef.current.focus();
    inputRef.current.style.borderColor = '#f59e0b';
  };

  // useReducer Demo
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div className="card">
      <div className="question-header">
        <h2>Q6: React Hooks Demonstration</h2>
        <div className="question-desc">
          Demonstrating useEffect, useContext, useRef, and useReducer hooks separately.
        </div>
      </div>

      <div className="grid-2">
        {/* useEffect */}
        <div className="result-box" style={{ background: 'rgba(59, 130, 246, 0.1)', borderColor: 'rgba(59, 130, 246, 0.3)', color: '#93c5fd' }}>
          <h3>useEffect Demo</h3>
          <p>Timer tracking component lifetime.</p>
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{seconds}s elapsed</div>
        </div>

        {/* useRef */}
        <div className="result-box" style={{ background: 'rgba(245, 158, 11, 0.1)', borderColor: 'rgba(245, 158, 11, 0.3)', color: '#fcd34d' }}>
          <h3>useRef Demo</h3>
          <p>Direct DOM access without re-rendering.</p>
          <input ref={inputRef} type="text" placeholder="Click button to focus me" style={{ marginBottom: '1rem' }} />
          <button className="warning" onClick={handleFocus}>Focus Input via Ref</button>
        </div>

        {/* useReducer */}
        <div className="result-box" style={{ background: 'rgba(236, 72, 153, 0.1)', borderColor: 'rgba(236, 72, 153, 0.3)', color: '#f9a8d4' }}>
          <h3>useReducer Demo</h3>
          <p>Managing complex state logic.</p>
          <div className="flex-gap">
            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
            <span style={{ fontSize: '1.5rem', margin: '0 1rem' }}>{state.count}</span>
            <button onClick={() => dispatch({ type: 'increment' })}>+</button>
          </div>
        </div>

        {/* useContext */}
        <div className="result-box" style={{ background: 'rgba(16, 185, 129, 0.1)', borderColor: 'rgba(16, 185, 129, 0.3)', color: '#6ee7b7' }}>
          <h3>useContext Demo</h3>
          <p>Global state access avoiding prop drilling.</p>
          <button style={{ marginBottom: '1rem' }} onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            Toggle Theme to {theme === 'dark' ? 'Light' : 'Dark'}
          </button>
          <ThemeContext.Provider value={theme}>
            <ContextDemo />
          </ThemeContext.Provider>
        </div>
      </div>
    </div>
  );
}
