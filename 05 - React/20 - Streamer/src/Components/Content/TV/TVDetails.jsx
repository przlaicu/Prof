import { useEffect, useState } from 'react';
import {
  dateFormatting,
  options,
  yearFormatting,
} from '../../../Helpers/utils';
import Loading from '../../Loading/Loading';
import Error from '../../Error/Error';
import { useParams } from 'react-router-dom';
import pluralize from 'pluralize';

export default function TVDetails() {
  const params = useParams();
  // State Management
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BASE_URL}/${process.env.REACT_APP_API_VERSION}/tv/${params.ID}?include_adult=false&append_to_response=videos,similar,credits,recommendations,images,release_dates,content_ratings,external_ids`,
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
  }, [params.ID]);

  document.title = `${data?.name} (${new Date(
    data?.first_air_date
  ).toLocaleDateString('en-US', yearFormatting)}) - Streamer+`;

  return (
    <>
      {loading && <Loading />}

      {error && <Error error={error?.message} />}

      {!loading && !error && (
        <div className='content'>
          <img
            className='poster'
            src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
          />
          <h3>
            {data.name} (
            {new Date(data.first_air_date).toLocaleDateString(
              'en-US',
              yearFormatting
            )}
            )
          </h3>
          <p className='details'>{data.overview}</p>

          <a href={`/rate/tv/${data.id}`} className='button'>
            Rate TV Show
          </a>

          <h5>First Air Date</h5>
          <p>
            {new Date(data.first_air_date).toLocaleDateString(
              'en-US',
              dateFormatting
            )}
          </p>

          {!!data.vote_average && (
            <>
              <h5>Audience Score</h5>
              <p>{data.vote_average}/10</p>
            </>
          )}

          <h5>Cast</h5>
          <ul className='dashed'>
            {data.credits.cast.map((cast) => (
              <li key={cast.id}>
                <a href={`/view/person/${cast.id}`}>{cast.original_name}</a> as{' '}
                {cast.character}
              </li>
            ))}
          </ul>

          <h5>{pluralize('Genre', data.genres.length)}</h5>
          <ul className='dashed'>
            {data.genres.map((genre) => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>

          <h5>{pluralize('Season', data.number_of_seasons)}</h5>
          <div className='scroll-tray'>
            {data.seasons.map((season) => (
              <div key={season.id}>
                <a
                  href={`/view/tv/${params.ID}/season/${season.season_number}`}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/original/${season.poster_path}`}
                    alt={season?.name}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
