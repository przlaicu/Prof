import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        maxWidth: '200px',
        margin: '20px auto',
        padding: '20px',
        textAlign: 'center',
        border: '1px solid #ccc',
        borderRadius: '8px',
      }}
    >
      <h2 style={{ marginBottom: '20px' }}>Counter</h2>
      <p style={{ fontSize: '24px', margin: '20px 0' }}>{count}</p>
      <div>
        <button
          onClick={decrement}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            marginRight: '10px',
            backgroundColor: '#f0f0f0',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          -
        </button>
        <button
          onClick={increment}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#f0f0f0',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
