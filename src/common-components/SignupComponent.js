import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { debounce } from 'lodash';
import EmptyNotify from 'assets/images/EmptyNotify.svg';
import WarningNotify from 'assets/images/WarningNotify.png';
import ValidatorWarning from 'assets/images/ValidatorWarning.svg';
import ReactIsCapsLockActive from '@matsun/reactiscapslockactive';
import SuccessTick from 'assets/images/SuccessTick.png';
import ajax from '../helpers/ajaxHelper';
import encrypt from '../helpers/encrypt';
import {
  EmailInput,
  EmailLabel,
  PassLabel,
  PasswordInput,
  SignInButton,
  SignInText,
  SignupWrapper,
  AuthBottomContainer,
} from '../Screens/welcome/signup/Signup.style';
import {
  CapslockNotifierText,
  EmailExistenceError,
  PasswordContainer,
  PasswordToolTip,
  TermsConditionsLabel,
  TermsConditionsLink,
  ToolTipSpan,
  ValidationFactorName,
} from './SignupComponent.style';

const SignupComponent = ({ renderUsernameField }) => {
  const showWarning = false;
  const [email, setEmail] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [showCritieria, setShowCriteria] = useState(false);
  const [emailInvalidErr, setEmailInvalidErr] = useState(false);
  const [shouldStartValidating, setShouldStarValidating] = useState(false);
  const [passwordInvalidErr, setPassInvalidErr] = useState(false);
  const [emailAlreadyExists, setEmailAlreadyExists] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState([
    {
      name: 'One small',
      isValid: false,
      id: 1,
    },
    {
      name: 'One caps',
      isValid: false,
      id: 2,
    },
    {
      name: 'minimum 8 characters',
      isValid: false,
      id: 3,
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

  useEffect(() => {
    if (emailAlreadyExists) {
      setEmailInvalidErr(true);
    } else {
      setEmailInvalidErr(false);
    }
  }, [emailAlreadyExists, emailInvalidErr]);

  useEffect(() => {
    if (shouldStartValidating) {
      const isValid = isValidPassword.filter((item) => item.isValid === false).length > 0;
      if (isValid) {
        setPassInvalidErr(true);
      } else {
        setPassInvalidErr(false);
      }
    }
  }, [passwordInvalidErr, isValidPassword]);

  const validate = () => {
    // eslint-disable-next-line no-control-regex
    const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

    return expression.test(String(email).toLowerCase());
  };

  const canSubmit = () => {
    const isValid = isValidPassword.filter((item) => item.isValid === true).length;
    return isValid === 3 && validate();
  };

  const onSubmit = () => {
    if (canSubmit() && !passwordInvalidErr && !emailInvalidErr) {
      const encryptedPassword = encrypt(passwordValue);
      // eslint-disable-next-line no-console
      console.log(email, encryptedPassword);
      renderUsernameField(email, encryptedPassword);
    }
  };

  const checkEmailAvailability = (value) => {
    if (value.length === 0) {
      return;
    }
    ajax
      .post('/idp/v1/user/emailAvailable', { email: value })
      .then(({ data }) => {
        const { isEmailAvailable } = data;
        if (isEmailAvailable) {
          setEmailAlreadyExists(true);
          return;
        }
        setEmailAlreadyExists(false);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
      });
  };

  const delayedHandleChange = useRef(debounce((value) => checkEmailAvailability(value), 700)).current;

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
        <EmailLabel>Email</EmailLabel>
        <If condition={emailAlreadyExists}>
          <img src={WarningNotify} width={12} height={12} alt="warning" style={{ marginLeft: 6, marginRight: 8 }} />
          <EmailExistenceError showExistsError={emailAlreadyExists}>Email already exists.</EmailExistenceError>
          <Else />
          <img src={EmptyNotify} width={12} height={12} alt="no warning" style={{ marginLeft: 6, marginRight: 8 }} />
        </If>
      </div>
      <EmailInput
        isError={emailInvalidErr}
        placeholder="abc_123@gmail.com"
        value={email}
        onChange={({ target }) => {
          setEmailAlreadyExists(false);
          setEmail(target.value);
          delayedHandleChange(target.value);
        }}
      />
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
                  <div
                    key={item.id}
                    style={{ display: 'flex', flexDirection: 'row', height: 21, alignItems: 'center' }}
                  >
                    <img src={item.isValid ? SuccessTick : ValidatorWarning} width={12} height={12} alt="acceptance factor" />
                    <ValidationFactorName>{item.name}</ValidationFactorName>
                  </div>
                );
              })}
            </ToolTipSpan>
          </PasswordToolTip>
          <ReactIsCapsLockActive>
            {(active) => (
              <If condition={active}>
                <CapslockNotifierText>Caps on</CapslockNotifierText>
              </If>
            )}
          </ReactIsCapsLockActive>
        </If>
      </PasswordContainer>
      <PasswordInput
        isError={passwordInvalidErr}
        value={passwordValue}
        type="password"
        onFocus={() => {
          setShouldStarValidating(true);
          setShowCriteria(true);
        }}
        onBlur={() => setShowCriteria(false)}
        onChange={(event) => {
          setPasswordValue(event.target.value);
        }}
      />
      <SignInButton onClick={() => onSubmit()}>
        <SignInText>Sign up</SignInText>
      </SignInButton>
      <AuthBottomContainer style={{ marginTop: 24 }}>
        <TermsConditionsLabel>
          By signing up you agree with all our{' '}
          <TermsConditionsLink href="https://www.google.com">terms</TermsConditionsLink> and{' '}
          <TermsConditionsLink href="https://www.google.com">conditions</TermsConditionsLink>
        </TermsConditionsLabel>
      </AuthBottomContainer>
    </SignupWrapper>
  );
};

SignupComponent.propTypes = {
  renderUsernameField: PropTypes.func.isRequired,
};

export default SignupComponent;
