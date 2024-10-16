import { useParams } from 'react-router-dom';
import './App.css';
import { useState, useEffect } from 'react';

export default function App() {
  const { userID } = useParams();
  // State Management
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.edu.skuflic.com/users/${userID}`
        );
        if (!response.ok) {
          response.status === 404 && alert('User not found');
          console.log(response.status);
          throw new Error('Network response was not OK.');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && (
        <div>
          <h1>{data.name}</h1>
          <p>{data.birthday}</p>
          <p>
            {data.address.street}, {data.address.city}, {data.address.zip},{' '}
            {data.address.country}
          </p>
          <h3>{data.email}</h3>
          <h4>{data.phone}</h4>
        </div>
      )}
    </div>
  );
}
