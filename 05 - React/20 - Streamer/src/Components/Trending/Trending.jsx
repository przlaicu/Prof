import { useEffect, useState } from 'react';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';
import { options } from '../../Helpers/utils';

export default function Trending({
  type,
  timeframe,
  title,
  subtitle,
  display,
}) {
  // State Management
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BASE_URL}/${process.env.REACT_APP_API_VERSION}/trending/${type}/${timeframe}?include_adult=false`,
          options
        );
        const result = await response.json();
        setData(result.results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {loading && <Loading />}

      {error && <Error error={error?.message} />}

      {!error && !loading && (
        <div className={`trending ${display}`}>
          <div className='title'>
            <h1>{title}</h1>
            <p>{subtitle}</p>
          </div>
          <div className='holder'>
            <div className='scroll-tray'>
              {data?.map((data) => (
                <a
                  href={`/view/${type}/${data.id}`}
                  key={data.id}
                  className='scroll-tray'
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
                    alt={data.title}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
