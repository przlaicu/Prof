import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

export default function Input({ setUser }) {
  const [userName, setUserName] = useState('');

  const handleUserChange = (event) => {
    const name = event.target.value;
    setUserName(name);
  };

  const handleUserSelected = (event) => {
    event.preventDefault();
    setUser(userName);
  };

  return (
    <Form onSubmit={handleUserSelected}>
      <FormControl
        size='lg'
        placeholder='Enter GitHub username'
        onChange={handleUserChange}
        value={userName}
        autoFocus
      />
    </Form>
  );
}

Input.propTypes = {
  setUser: PropTypes.func,
};
