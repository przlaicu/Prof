// Image Imports
import Streamer from '../../Images/Logo/streamer.svg';
import Facebook from '../../Images/Icons/facebook.svg';
import Twitter from '../../Images/Icons/twitter.svg';
import YouTube from '../../Images/Icons/youtube.svg';

export default function Footer() {
  return (
    <footer>
      <img src={Streamer} alt='Streamer+' className='logo' />
      <ul>
        <li>
          <a href='https://www.facebook.com'>
            <img src={Facebook} alt='Facebook' />
          </a>
        </li>
        <li>
          <a href='https://www.twitter.com'>
            <img src={Twitter} alt='Twitter' />
          </a>
        </li>
        <li>
          <a href='https://www.youtube.com'>
            <img src={YouTube} alt='YouTube' />
          </a>
        </li>
      </ul>
      <span>
        &copy; {new Date().getFullYear()} ACME, Inc. or it's subsidiary or
        affiliate. Streamer+ is a prpoerty of ACME, Inc. All rights reserved.
      </span>
    </footer>
  );
}
