import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import CONFIGS from 'appConfig';
import Cookies from 'js-cookie';
import Context from './LoggedInContext';

const LoggedInProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const accessToken = Cookies.get('accessToken');
    const encryptedIdToken = Cookies.get('encryptedIdToken');
    if (accessToken && encryptedIdToken) {
      setIsLoggedIn(true);
    }
  }, []);

  const saveToken = (tokenData) => {
    let isSecure = true;
    if (CONFIGS.ENVIRONMENT.toLowerCase() === 'local') {
      isSecure = false;
    }
    Cookies.set('accessToken', tokenData.accessToken, { secure: isSecure, expires: new Date(tokenData.expiresAt) });
    Cookies.set('encryptedIdToken', tokenData.encryptedIdToken, {
      secure: isSecure,
      expires: new Date(tokenData.expiresAt),
    });
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
