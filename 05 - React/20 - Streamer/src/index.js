import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  Footer,
  MovieDetails,
  NavigationBar,
  Rate,
  Search,
  TVDetails,
  Trending,
} from './Components';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <NavigationBar />
    <Routes>
      <Route path='/' element={<App />} />
      <Route
        path='/trending/movies/week'
        element={
          <Trending
            type='movie'
            timeframe='week'
            title='Trending movies this week'
            subtitle='Not happy with these? You can always use our search function.'
            display='list'
          />
        }
      />
      <Route
        path='/trending/tv/week'
        element={
          <Trending
            type='tv'
            timeframe='week'
            title='Trending TV shows this week'
            subtitle='Not happy with these? You can always use our search function.'
            display='list'
          />
        }
      />
      <Route path='search' element={<Search />} />
      <Route path='/view/tv/:ID' element={<TVDetails />} />
      <Route path='/view/movie/:ID' element={<MovieDetails />} />

      <Route
        path='/rate/movie/:ID'
        element={<Rate type='movie' title='movie' />}
      />

      <Route path='/rate/tv/:ID' element={<Rate type='tv' title='TV show' />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
