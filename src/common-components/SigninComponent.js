import React from 'react';
import EmptyNotify from 'assets/images/EmptyNotify.svg';
import WarningNotify from 'assets/images/WarningNotify.png';
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
  const showWarning = false;
  return (
    <SignupWrapper>
      <EmailLabel>Email</EmailLabel>
      <EmailInput placeholder="abc_123@gmail.com" />
      <PasswordContainer>
        <PassLabel>Password</PassLabel>
        <If condition={showWarning}>
          <img src={WarningNotify} width={12} height={12} alt="warning" style={{ marginLeft: 6, marginRight: 8 }} />
          <Else />
          <img src={EmptyNotify} width={12} height={12} alt="no warning" style={{ marginLeft: 6, marginRight: 8 }} />
        </If>
      </PasswordContainer>
      <PasswordInput type="password" />
      <SignInButton>
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
