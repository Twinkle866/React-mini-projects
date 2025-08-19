import React, { useState } from 'react';
import "./style.css"

export default function Calculator() {
  const [display, setDisplay] = useState('0');
  
  const [expression, setExpression] = useState('');

  const calculateResult = (expr) => {
    try {
      const result = new Function(`return ${expr}`)();
      return result;
    } catch (error) {
      return 'Error';
    }
  };

  const handleButtonClick = (value) => {
    if (expression === '0' && value !== '.') {
      setExpression(value);
      setDisplay(value);
    } else if (value === '=') {
      const result = calculateResult(expression);
      setDisplay(result);
      setExpression(result.toString());
    } else if (value === 'C') {
      setDisplay('0');
      setExpression('');
    } else {
      setExpression(prevExpression => prevExpression + value);
      setDisplay(prevExpression => prevExpression + value);
    }
  };

  const buttons = [
    { value: 'C', className: 'button-clear' },
    { value: '/', className: 'button-operator' },
    { value: '*', className: 'button-operator' },
    { value: '7', className: 'button-number' },
    { value: '8', className: 'button-number' },
    { value: '9', className: 'button-number' },
    { value: '-', className: 'button-operator' },
    { value: '4', className: 'button-number' },
    { value: '5', className: 'button-number' },
    { value: '6', className: 'button-number' },
    { value: '+', className: 'button-operator' },
    { value: '1', className: 'button-number' },
    { value: '2', className: 'button-number' },
    { value: '3', className: 'button-number' },
    { value: '=', className: 'button-equals' },
    { value: '0', className: 'button-number' },
    { value: '00', className: 'button-number' },
    { value: '.', className: 'button-number' },
  ];

  return (
    <div className="calculator">
      <div className="display">
        <div className="expression">{expression}</div>
        <div className="result">{display}</div>
      </div>

      <div className="button-grid">
        {buttons.map((button, index) => (
          <button
            key={index}
            onClick={() => handleButtonClick(button.value)}
            className={`calc-button ${button.className}`}
          >
            {button.value}
          </button>
        ))}
      </div>
    </div>
  );
}
