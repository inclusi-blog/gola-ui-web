import React, { useState } from 'react';
import EmptyNotify from 'assets/images/EmptyNotify.svg';
import WarningNotify from 'assets/images/WarningNotify.png';
import Tick from 'assets/images/tick.svg';
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
import { PasswordContainer, PasswordToolTip, TermsConditionsLabel, ToolTipSpan } from './SignupComponent.style';

const SignupComponent = () => {
  const showWarning = false;
  const [showCritieria, setShowCriteria] = useState(false);
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
          <PasswordToolTip isVisible={showCritieria}>
            <ToolTipSpan>
              <div style={{ display: 'flex', flexDirection: 'row', height: 21, alignItems: 'center' }}>
                <img src={Tick} width={12} height={12} alt="acceptance factor" />
                <p style={{ marginLeft: 5, marginRight: 0, marginTop: 0, marginBottom: 0 }}>One Capital</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', height: 21, alignItems: 'center' }}>
                <img src={Tick} width={12} height={12} alt="acceptance factor" />
                <p style={{ marginLeft: 5, marginRight: 0, marginTop: 0, marginBottom: 0 }}>One Capital</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', height: 21, alignItems: 'center' }}>
                <img src={Tick} width={12} height={12} alt="acceptance factor" />
                <p style={{ marginLeft: 5, marginRight: 0, marginTop: 0, marginBottom: 0 }}>One Capital</p>
              </div>
            </ToolTipSpan>
          </PasswordToolTip>
        </If>
      </PasswordContainer>
      <PasswordInput type="password" onFocus={() => setShowCriteria(true)} onBlur={() => setShowCriteria(false)} />
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
