import React, {useContext, useState} from 'react';
import LoggedInContext from 'context-providers/loggedin-provider/LoggedInContext';
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
import {PasswordContainer} from './SignupComponent.style';

const SigninComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
    login(tokenData);
  };

  const handleFailureLogin = () => {};

  const submitPassword = async () => {
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
      <AuthInputLabel>Email</AuthInputLabel>
      <EmailInput placeholder="example@gmail.com" value={email} onChange={({ target }) => setEmail(target.value)} />
      <PasswordContainer>
        <AuthInputLabel>Password</AuthInputLabel>
      </PasswordContainer>
      <PasswordInput type="password" value={password} onChange={({ target }) => setPassword(target.value)} />
      <SignInButton onClick={() => submitPassword()}>
        Sign in
      </SignInButton>
    </SignupWrapper>
  );
};

export default SigninComponent;
