import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';
import { options } from '../../Helpers/utils';

export default function Search() {
  // State Management
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('q');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BASE_URL}/${process.env.REACT_APP_API_VERSION}/search/multi?query=${query}&include_adult=false`,
          options
        );
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
    <>
      {loading && <Loading />}

      {error && <Error error={error?.message} />}

      {!loading && !error && (
        <div className='trending list'>
          <div className='title'>
            <h1>Explore titles related to: {query}</h1>
            <p>Not what you were searching for? Try again.</p>
          </div>
          <div className='scroll-tray'>
            {data?.results.map((data) => (
              <div key={data.id}>
                <a
                  href={`/view/${data.media_type}/${data.id}`}
                  className='scroll-tray'
                >
                  {!data.poster_path ? (
                    <img src='https://placehold.co/150x225' alt={data.title} />
                  ) : (
                    <img
                      src={`https://image.tmdb.org/t/p/w342/${data.poster_path}`}
                    />
                  )}
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
