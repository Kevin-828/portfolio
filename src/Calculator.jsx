import { useState } from 'react';
import { Link } from 'react-router-dom';

const symbols = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  char: ['+', '-', '×', '÷'][i % 4],
  left: Math.random() * 90 + '%',
  top: Math.random() * 90 + '%',
  delay: Math.random() * 0.5 + 's',
}));

function Calculator() {
  const [display, setDisplay] = useState('');

  const press = (value) => {
    setDisplay(display + value);
  };

  const clear = () => {
    setDisplay('');
  };

  const back = () => {
    setDisplay(display.slice(0, -1));
  };

  const calculate = () => {
    try {
      const parts = display.match(/(\d+\.?\d*|[+\-*/])/g);
      if (!parts) return;
      let result = parseFloat(parts[0]);
      for (let i = 1; i < parts.length; i += 2) {
        const op = parts[i];
        const num = parseFloat(parts[i + 1]);
        if (op === '+') result += num;
        if (op === '-') result -= num;
        if (op === '*') result *= num;
        if (op === '/') result /= num;
      }
      setDisplay(String(result));
    } catch {
      setDisplay('Error');
    }
  };

  const keys = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+'
  ];

  return (
    <div className="panel open calc-page">
      {symbols.map((s) => (
        <span
          key={s.id}
          className="symbol"
          style={{ left: s.left, top: s.top, animationDelay: s.delay }}
        >
          {s.char}
        </span>
      ))}

      {/* Top bar: Title on the left, RETURN on the opposite right side */}
      <div className="calc-header">
        <h1>CALCULATOR</h1>
        <Link to="/projects">
          <button className="calc-back">RETURN</button>
        </Link>
      </div>

      {/* Main Rectangular Calculator Box */}
      <div className="calc">
        <div className="calc-display">{display || '0'}</div>
        
        <div className="calc-keys">
          {keys.map((k) => (
            <button
              key={k}
              className={k === '=' ? 'btn-equal' : ''}
              onClick={() => (k === '=' ? calculate() : press(k))}
            >
              {k}
            </button>
          ))}
          <button className="btn-clear" onClick={clear}>C</button>
          <button className="btn-del" onClick={back}>DEL</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;