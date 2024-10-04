import React, { useState } from 'react';

export default function ColorPicker() {
  const [color, setColor] = useState('#E6E6FA');

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        maxWidth: '300px',
        margin: '20px auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
      }}
    >
      <h2
        style={{
          textAlign: 'center',
          marginBottom: '20px',
        }}
      >
        Color Picker
      </h2>
      <div
        style={{
          width: '100%',
          height: '100px',
          backgroundColor: color,
          borderRadius: '4px',
          marginBottom: '20px',
        }}
      ></div>
      <div
        style={{
          marginBottom: '10px',
        }}
      >
        <label
          htmlFor='colorInput'
          style={{
            display: 'block',
            marginBottom: '5px',
          }}
        >
          Select a color:
        </label>
        <input
          id='colorInput'
          type='color'
          value={color}
          onChange={handleColorChange}
          style={{
            width: '100%',
            height: '40px',
          }}
        />
      </div>
      <p
        style={{
          textAlign: 'center',
          fontFamily: 'monospace',
        }}
      >
        Selected color: {color}
      </p>
    </div>
  );
}
