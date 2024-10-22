// https://api.themoviedb.org/3/search/multi?query=Sabrina

import { useSearchParams } from 'react-router-dom';

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();

  // useEffect gdje ćemo napraviti API call na https://api.themoviedb.org/3/search/multi?query={searchParams.get('q')}
  return <h1>Search value: {searchParams.get('q')}</h1>;
}
