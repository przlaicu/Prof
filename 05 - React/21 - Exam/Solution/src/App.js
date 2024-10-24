import React, { useState } from 'react';
import { User, Input, Repositories } from './Components';
import { API } from './Services';
import './App.scss';

export default function App() {
  const [user, setUser] = useState(null);
  const [repositories, setRepositories] = useState([]);

  async function handleSetUser(userName) {
    try {
      const userData = await API.fetchUser(userName);
      const userRepos = await API.fetchUserRepos(userName);

      setUser(userData);
      setRepositories(userRepos);
    } catch (error) {
      alert(error);
    }
  }

  const handleResetUser = () => {
    setUser(null);
    setRepositories([]);
  };

  return (
    <div className='app'>
      {!user ? (
        <Input setUser={handleSetUser} />
      ) : (
        <div className='data'>
          <User user={user} />
          <Repositories repositories={repositories} />
          <p
            variant='secondary'
            onClick={handleResetUser}
            type='submit'
            className='button reset'
          >
            Start Again
          </p>
        </div>
      )}
    </div>
  );
}
