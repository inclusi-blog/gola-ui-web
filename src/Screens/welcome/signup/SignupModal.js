import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import FacebookImg from 'assets/images/Facebook.svg';
import GoogleImg from 'assets/images/google.svg';
import LinkedinImg from 'assets/images/LinkedIn.svg';
import TwitterImg from 'assets/images/Twitter.png';
import SigninComponent from 'common-components/SigninComponent';
import SignupComponent from 'common-components/SignupComponent';
import { Redirect } from 'react-router-dom';
import '../../../index.css';
import ajax from 'helpers/ajaxHelper';
import Close from 'assets/images/close.svg';
import FlowModal from 'common-components/FlowModal/FlowModal';
import {
  SignupHeader,
  SignupContainer,
  TwitterIcon,
  FacebookIcon,
  GoogleIcon,
  LinkedInIcon,
  SignupLabelContainer,
  SignupLabel,
  CenterSignupModalWrapper,
} from './Signup.style';
import UsernameInputScreen from './UsernameInputScreen';

const SignupModal = ({ isSignup, onClose }) => {
  const [userSignupDetails, setUserSignupDetails] = useState({
    username: '',
    encryptedPassword: '',
    email: '',
  });
  const [redirect, setRedirect] = useState(false);
  const [shouldRenderUsernameField, setShouldRenderUsernameField] = useState(false);

  useEffect(() => {
    if (userSignupDetails.email.length) {
      setShouldRenderUsernameField(true);
    }
    if (userSignupDetails.username && userSignupDetails.email && userSignupDetails.encryptedPassword) {
      ajax
        .post('/idp/v1/user/register', {
          email: userSignupDetails.email,
          password: userSignupDetails.encryptedPassword,
          username: userSignupDetails.username,
        })
        .then(() => {
          setRedirect(true);
        })
        .catch((err) => {
          // eslint-disable-next-line no-console
          console.log('something went wrong', err);
        });
    }
  }, [userSignupDetails]);

  return (
    <FlowModal onClose={onClose}>
      <div
        className="slideIn"
        style={{
          width: 646,
          height: 689,
          borderRadius: 10,
          border: '1px solid black',
          backgroundColor: 'white',
          justifyContent: 'center',
        }}
      >
        <If condition={redirect}>
          <Redirect
            to={{
              pathname: '/verify',
              state: {
                email: userSignupDetails.email,
              },
            }}
          />
        </If>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            borderBottom: '1px solid #DEE4EB',
            paddingLeft: 16,
            paddingTop: 16,
            paddingBottom: 16,
            paddingRight: 6,
            marginLeft: 10,
            marginRight: 10,
            flex: 1,
          }}
        >
          <div
            style={{
              display: 'flex',
              flex: 20,
              justifyContent: 'center',
            }}
          >
            <SignupHeader>Mensuvadi</SignupHeader>
          </div>
          {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions,jsx-a11y/click-events-have-key-events */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              height: 32,
              flex: 1,
            }}
            onClick={() => onClose()}
          >
            <img src={Close} width={32} height={32} alt="closeButton" />
          </div>
        </div>
        <If condition={shouldRenderUsernameField}>
          <UsernameInputScreen onSubmit={(username) => setUserSignupDetails({ ...userSignupDetails, username })} />
          <Else />
          <CenterSignupModalWrapper>
            <SignupContainer>
              <GoogleIcon src={GoogleImg} />
              <FacebookIcon src={FacebookImg} />
              <TwitterIcon src={TwitterImg} />
              <LinkedInIcon src={LinkedinImg} />
            </SignupContainer>
            <SignupLabelContainer>
              <SignupLabel>or sign in with</SignupLabel>
            </SignupLabelContainer>
            <Choose>
              <When condition={isSignup}>
                <SignupComponent
                  renderUsernameField={(email, password) => {
                    setUserSignupDetails({ ...userSignupDetails, email, encryptedPassword: password });
                  }}
                />
              </When>
              <Otherwise>
                <SigninComponent />
              </Otherwise>
            </Choose>
          </CenterSignupModalWrapper>
        </If>
      </div>
    </FlowModal>
  );
};

SignupModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  isSignup: PropTypes.bool.isRequired,
};

export default SignupModal;
