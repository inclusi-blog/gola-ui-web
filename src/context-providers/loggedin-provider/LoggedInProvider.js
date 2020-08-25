import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './LoggedInContext';

const LoggedInProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
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
