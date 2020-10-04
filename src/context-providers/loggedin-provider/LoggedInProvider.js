import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './LoggedInContext';

const LoggedInProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    const idToken = localStorage.getItem('encryptedIdToken');
    if (accessToken && idToken) {
      setIsLoggedIn(true);
    }
  }, []);

  const saveToken = (tokenData) => {
    localStorage.setItem('accessToken', tokenData.accessToken);
    localStorage.setItem('encryptedIdToken', tokenData.encryptedIdToken);
    localStorage.setItem('expiresIn', tokenData.expiresIn);
    localStorage.setItem('expiresAt', tokenData.expiresAt);
  };

  const login = (tokenData) => {
    saveToken(tokenData);
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return <Context.Provider value={{ isLoggedIn, login, logout }}>{children}</Context.Provider>;
};

LoggedInProvider.propTypes = {
  children: PropTypes.element,
};

LoggedInProvider.defaultProps = {
  children: null,
};

export default LoggedInProvider;
