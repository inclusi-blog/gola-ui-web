import React, { useState } from 'react';
import encrypt from '../helpers/encrypt';
import {
  broadCastFetchLoginChallenge,
  generateRandomString,
  handleConsentAndFetchToken,
} from '../Screens/welcome/signin/helper';
import loginService from '../Screens/welcome/signin/loginService';
import {
  AccountTxt,
  EmailInput,
  EmailLabel,
  ForgetPass,
  PassLabel,
  PasswordInput,
  SignInButton,
  SignInText,
  SignUpLink,
  SignupWrapper,
  AuthBottomContainer,
} from '../Screens/welcome/signup/Signup.style';
import { PasswordContainer } from './SignupComponent.style';

const SigninComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
      <EmailLabel>Email</EmailLabel>
      <EmailInput placeholder="abc_123@gmail.com" value={email} onChange={({ target }) => setEmail(target.value)} />
      <PasswordContainer>
        <PassLabel>Password</PassLabel>
      </PasswordContainer>
      <PasswordInput type="password" value={password} onChange={({ target }) => setPassword(target.value)} />
      <SignInButton onClick={() => submitPassword()}>
        <SignInText>Sign in</SignInText>
      </SignInButton>
      <AuthBottomContainer>
        <AccountTxt>Don’t have an account ?</AccountTxt>
        <SignUpLink>Sign up</SignUpLink>
        <ForgetPass>Forgot password ?</ForgetPass>
      </AuthBottomContainer>
    </SignupWrapper>
  );
};

export default SigninComponent;
