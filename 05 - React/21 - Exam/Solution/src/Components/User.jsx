import React from 'react';
import PropTypes from 'prop-types';

export default function User({ user }) {
  if (!user) {
    return null;
  }

  const { blog, bio, name, location, created_at, type, avatar_url } = user;

  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return (
    <div className='container'>
      {type === 'Organization' && <img src={avatar_url} alt={name} />}
      <div className='name'>
        <h1>{name}</h1>
        {type && <span className={`type ${type}`}>{type}</span>}
      </div>
      {bio && <p className='description bio'>{bio}</p>}
      <div className='description'>
        {created_at && (
          <p>
            Created {new Date(created_at).toLocaleDateString('en-US', options)}{' '}
          </p>
        )}
        {location && <p>Located in {location}</p>}
        {blog && (
          <p>
            <a href={blog} target='_blank' rel='noreferrer'>
              {blog}
            </a>
          </p>
        )}
      </div>
    </div>
  );
}

User.propTypes = {
  user: PropTypes.object,
};
