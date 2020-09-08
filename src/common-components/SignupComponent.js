import React from 'react';
import EmptyNotify from 'assets/images/EmptyNotify.svg';
import WarningNotify from 'assets/images/WarningNotify.png';
import {
  EmailInput,
  EmailLabel,
  PassLabel,
  PasswordInput,
  SignInButton,
  SignInText,
  SignupWrapper,
  AuthBottomContainer,
} from '../welcome/signup/Signup.style';
import { PasswordContainer, TermsConditionsLabel } from './SignupComponent.style';

const SignupComponent = () => {
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
        <SignInText>Sign up</SignInText>
      </SignInButton>
      <AuthBottomContainer style={{ marginTop: 24 }}>
        <TermsConditionsLabel>By signing up you agree with all our terms and conditions</TermsConditionsLabel>
      </AuthBottomContainer>
    </SignupWrapper>
  );
};

export default SignupComponent;
