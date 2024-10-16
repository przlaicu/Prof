import './App.css';
import { useState, useEffect } from 'react';

export default function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch('https://countries.trevorblades.com/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `{
          country(code: "CH"){
            name
            native
            capital
            languages {
              code
              name
            }
          }
        }`,
      }),
    })
      .then((response) => response.json())
      .then((ourData) => setData(ourData.data.country));
  }, []);
  const animals = ['Fox', 'Cat', 'Elephant'];
  return (
    <div>
      <h1>
        {data.name} ({data.native})
      </h1>
      <h2>Capital: {data.capital}</h2>
      <h3>
        Languages: {data.languages?.map((language) => language.name).join(', ')}
      </h3>
    </div>
  );
}
