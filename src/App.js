import { useState } from 'react';
import { evaluate } from 'mathjs';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(0);

  const calculateResult = (expr) => {
    try {
      return evaluate(expr);
    } catch (error) {
      return 'Error';
    }
  };

  const handleClick = (value) => {
    if (value === '=') {
      if (input) {
        setResult(calculateResult(input));
      }
    } else if (value === 'C') {
      setInput('');
      setResult(0);
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="calculator">
      <h1>React Calculator</h1>
      <div className="display">
        <div className="input">{input}</div>
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        {[7, 8, 9, '+', 4, 5, 6, '-', 1, 2, 3, '*', 'C', 0, '=', '/'].map((item) => (
          <button 
            key={item} 
            onClick={() => handleClick(item)}
            className={`button ${item === '=' ? 'equals' : ''}`}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;