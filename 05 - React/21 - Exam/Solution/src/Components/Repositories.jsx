import React from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';

export default function Repositories({ repositorys }) {
  if (!repositorys || repositorys.length <= 0) {
    return null;
  }

  return (
    <ListGroup>
      {repositorys.map((repository) => (
        <ListGroup.Item key={repository.id}>
          <a href={repository.svn_url} target='_blank' rel='noreferrer'>
            {repository.full_name}
          </a>
          <span className='visibility'>{repository.visibility}</span>
          <span className='description no-margin'>
            {repository.description}
          </span>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

Repositories.propTypes = {
  repositorys: PropTypes.array,
};
