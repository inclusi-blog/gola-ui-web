import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import CONFIGS from 'appConfig';
import Cookies from 'js-cookie';
import setCookieWithExpiry from 'helpers/setCookieWithExpiry';
import STORAGE_KEYS from 'helpers/localstorage';
import { useHistory } from 'react-router';
import { LOGOUT_PATH } from 'helpers/routes';
import Context from './LoggedInContext';

const LoggedInProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [accessToken, setAccessToken] = useState('');
  const [encryptedIdToken, setEncryptedIdToken] = useState('');
  const history = useHistory();

  useEffect(() => {
    const acxsToken = Cookies.get('accessToken');
    const encIdToken = Cookies.get('encryptedIdToken');
    if (acxsToken && encIdToken) {
      setAccessToken(acxsToken);
      setEncryptedIdToken(encIdToken);
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

  const resetFirstTimeUserCookie = () => {
    setCookieWithExpiry(STORAGE_KEYS.IS_FIRST_TIME_USER_KEY, false);
  };

  const goToLogout = () => {
    resetFirstTimeUserCookie();
    history.push(LOGOUT_PATH);
  };

  const clearStorageAndContextOnLogout = () => {
    localStorage.clear();
    sessionStorage.clear();
  };

  const login = (tokenData) => {
    saveToken(tokenData);
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  const logoutOnTokenExpiry = () => {
    goToLogout();
    clearStorageAndContextOnLogout();
  };

  return (
    <Context.Provider value={{ isLoggedIn, login, logout, accessToken, encryptedIdToken, logoutOnTokenExpiry }}>
      {children}
    </Context.Provider>
  );
};

LoggedInProvider.propTypes = {
  children: PropTypes.element,
};

LoggedInProvider.defaultProps = {
  children: null,
};

export default LoggedInProvider;
