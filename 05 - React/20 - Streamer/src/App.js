import './Styles/App.scss';
import Streamer from './Images/Logo/streamer.svg';
import Trending from './Components/Trending/Trending';

export default function App() {
  return (
    <div className='main'>
      <div className='hero'>
        <img src={Streamer} alt='Streamer+' className='logo' />
        <h1>A mountain of entertainment</h1>
        <p>
          Home to the world's favourite stars, stories, and brands is coming
          soon.
        </p>
        <p>
          Get ready to experience stellar originals, exclusive premiers, hit
          movies and the very best must-see TV.
        </p>
      </div>

      <div className='holder'>
        <Trending type='movie' timeframe='week' />
        <Trending type='tv' timeframe='week' />
        <Trending type='movie' timeframe='day' />
      </div>
    </div>
  );
}
