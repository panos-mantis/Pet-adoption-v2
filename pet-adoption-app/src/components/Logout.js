import React from 'react';
import { Redirect } from 'react-router-dom';
import { logout } from '../api';

const Logout = () => {
  const handleLogout = () => {
    logout();
  };

  return (
    <>
      {handleLogout()}
      <Redirect to="/" />
    </>
  );
};

export default Logout;
