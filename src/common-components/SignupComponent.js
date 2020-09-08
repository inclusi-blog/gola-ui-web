import React, { useEffect, useState } from 'react';
import EmptyNotify from 'assets/images/EmptyNotify.svg';
import WarningNotify from 'assets/images/WarningNotify.png';
import ValidatorWarning from 'assets/images/ValidatorWarning.svg';
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
import {
  PasswordContainer,
  PasswordToolTip,
  TermsConditionsLabel,
  ToolTipSpan,
  ValidationFactorName,
} from './SignupComponent.style';

const SignupComponent = () => {
  const showWarning = false;
  const [passwordValue, setPasswordValue] = useState('');
  const [showCritieria, setShowCriteria] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState([
    {
      name: 'One small',
      isValid: false,
    },
    {
      name: 'One caps',
      isValid: false,
    },
    {
      name: 'minimum 8 characters',
      isValid: false,
    },
  ]);

  const isHavingOneCapitalLetter = /[A-Z]/.test(passwordValue);
  const isHavingOneSmallLetter = /[a-z]/.test(passwordValue);

  useEffect(() => {
    const updatedValidation = isValidPassword.map((item) => {
      if (item.name === 'minimum 8 characters') {
        return { ...item, isValid: passwordValue.length >= 8 };
      }
      if (item.name === 'One caps') {
        return { ...item, isValid: isHavingOneCapitalLetter };
      }
      return { ...item, isValid: isHavingOneSmallLetter };
    });
    setIsValidPassword(updatedValidation);
  }, [passwordValue]);

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
              {isValidPassword.map((item) => {
                return (
                  <div style={{ display: 'flex', flexDirection: 'row', height: 21, alignItems: 'center' }}>
                    <img src={item.isValid ? Tick : ValidatorWarning} width={12} height={12} alt="acceptance factor" />
                    <ValidationFactorName>{item.name}</ValidationFactorName>
                  </div>
                );
              })}
            </ToolTipSpan>
          </PasswordToolTip>
        </If>
      </PasswordContainer>
      <PasswordInput
        value={passwordValue}
        type="password"
        onFocus={() => setShowCriteria(true)}
        onBlur={() => setShowCriteria(false)}
        onChange={(event) => {
          setPasswordValue(event.target.value);
        }}
      />
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
