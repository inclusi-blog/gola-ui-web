import React, { useContext, useState } from 'react';
import LoggedInContext from 'context-providers/loggedin-provider/LoggedInContext';
import WarningNotify from 'assets/images/WarningNotify.png';
import EmptyNotify from 'assets/images/EmptyNotify.svg';
import { Tooltip, useMediaQuery } from '@mui/material';
import encrypt from '../helpers/encrypt';
import {
  broadCastFetchLoginChallenge,
  generateRandomString,
  handleConsentAndFetchToken,
} from '../Screens/welcome/signin/helper';
import loginService from '../Screens/welcome/signin/loginService';
import {
  AuthInputLabel,
  EmailInput,
  PasswordInput,
  SignInButton,
  SignupWrapper,
} from '../Screens/welcome/signup/Signup.style';
import { EmailExistenceError, PasswordContainer } from './SignupComponent.style';
import { validateEmail } from '../utils/commonUtils';

const SigninComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailErr, setEmailErr] = useState(null);
  const [passwordErr, setPasswordErr] = useState(null);
  const matches = useMediaQuery('(max-width:767px)');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useContext(LoggedInContext);

  const handleSuccessfulLogin = async (responseData, loginVerifier) => {
    // eslint-disable-next-line no-unused-vars
    let tokenData;
    try {
      tokenData = await handleConsentAndFetchToken(responseData.data.redirect_to, loginVerifier);
    } catch {
      // eslint-disable-next-line no-console
      console.log('something went wrong');
      return;
    }
    // eslint-disable-next-line no-console
    console.log('successfully logged in', tokenData);
    setIsLoading(false);
    login();
  };

  const handleFailureLogin = (err) => {
    setIsLoading(false);
    if (err?.response?.data?.errorCode === 'ERR_IDP_INVALID_CREDENTIALS') {
      setPasswordErr('Invalid email or password');
    }
  };

  const submitPassword = async () => {
    setIsLoading(true);
    if (!validateEmail(email)) {
      setIsLoading(false);
      setEmailErr('Please enter valid email');
      return;
    }
    setEmailErr(null);

    if (password.length === 0) {
      setIsLoading(false);
      setPasswordErr('Please enter valid password');
      return;
    }
    setPasswordErr(null);

    const code = generateRandomString();
    let loginChallengeFromResponse = '';
    try {
      loginChallengeFromResponse = await broadCastFetchLoginChallenge(code);
    } catch {
      return;
    }
    loginService
      .loginUser(email, encrypt(password), loginChallengeFromResponse)
      .then((responseData) => handleSuccessfulLogin(responseData, code))
      .catch(handleFailureLogin);
  };

  return (
    <SignupWrapper>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <AuthInputLabel>Email</AuthInputLabel>
        <If condition={emailErr}>
          <img
            src={WarningNotify}
            width={matches ? 7 : 12}
            height={matches ? 7 : 12}
            alt="warning"
            style={{ marginLeft: 6, marginRight: 8 }}
          />
          <EmailExistenceError showExistsError={emailErr}>{emailErr}</EmailExistenceError>
          <Else />
          <img
            src={EmptyNotify}
            width={matches ? 7 : 12}
            height={matches ? 7 : 12}
            alt="no warning"
            style={{ marginLeft: 6, marginRight: 8 }}
          />
        </If>
      </div>
      <EmailInput placeholder="example@gmail.com" value={email} onChange={({ target }) => setEmail(target.value)} />
      <PasswordContainer>
        <AuthInputLabel>Password</AuthInputLabel>
        <Tooltip arrow placement="right" title={<div>Use a secure password</div>}>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Choose>
              <When condition={passwordErr}>
                <img
                  src={WarningNotify}
                  width={matches ? 7 : 12}
                  height={matches ? 7 : 12}
                  alt="warning"
                  style={{ marginLeft: 6, marginRight: 8 }}
                />
                <EmailExistenceError showExistsError={passwordErr}>{passwordErr}</EmailExistenceError>
              </When>
              <Otherwise>
                <img
                  src={EmptyNotify}
                  width={matches ? 7 : 12}
                  height={matches ? 7 : 12}
                  alt="no warning"
                  style={{ marginLeft: 6, marginRight: 8 }}
                />
              </Otherwise>
            </Choose>
          </div>
        </Tooltip>
      </PasswordContainer>
      <PasswordInput type="password" value={password} onChange={({ target }) => setPassword(target.value)} />
      <SignInButton onClick={() => submitPassword()} loading={isLoading}>
        Sign in
      </SignInButton>
    </SignupWrapper>
  );
};

export default SigninComponent;
