import { useState } from 'react';
export default function FunctionalExample() {
  const [value, setValue] = useState('Placeholder');

  const changeValue = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(value);
  };

  return (
    <div>
      <h1>Functional Example</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' value={value} onChange={changeValue} />
        <button type='submit'>Submit Data</button>
      </form>
    </div>
  );
}
