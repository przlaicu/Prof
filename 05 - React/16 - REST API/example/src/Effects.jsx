import { useEffect, useState } from 'react';

export default function Effects() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
    console.log(`Count: ${count}`);
  }, [count]);

  useEffect(() => {
    console.log('Count Updated');
  });

  return (
    <div>
      <h1>Effects</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </div>
  );
}
