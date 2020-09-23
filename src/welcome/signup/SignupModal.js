import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import FacebookImg from 'assets/images/Facebook.svg';
import GoogleImg from 'assets/images/google.svg';
import LinkedinImg from 'assets/images/LinkedIn.svg';
import TwitterImg from 'assets/images/Twitter.png';
import SigninComponent from 'common-components/SigninComponent';
import SignupComponent from 'common-components/SignupComponent';
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

const SignupModal = ({ showModal, closeModal, isSignup }) => {
  const [userSignupDetails, setUserSignupDetails] = useState({
    username: '',
    encryptedPassword: '',
    email: '',
  });
  const [shouldRenderUsernameField, setShouldRenderUsernameField] = useState(false);

  useEffect(() => {
    if (userSignupDetails.email.length) {
      setShouldRenderUsernameField(true);
    }
  }, [userSignupDetails]);

  const customStyles = {
    content: {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: 'transparent',
      overflow: 'scroll',
    },
    overlay: {
      backgroundColor: 'transparent',
    },
  };
  return (
    <Modal
      closeTimeoutMS={500}
      isOpen={showModal}
      onAfterOpen={() => {}}
      onRequestClose={() => {
        document.body.classList.remove('ReactModal__Body--before-close');
        closeModal();
      }}
      contentLabel="Example Modal"
      style={customStyles}
    >
      <div
        style={{
          width: 646,
          height: 689,
          borderRadius: 10,
          border: '1px solid black',
          backgroundColor: 'white',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderBottom: '1px solid #DEE4EB',
            padding: 16,
            marginLeft: 10,
            marginRight: 10,
          }}
        >
          <SignupHeader>Mensuvadi</SignupHeader>
        </div>
        <If condition={shouldRenderUsernameField}>
          <UsernameInputScreen />
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
    </Modal>
  );
};

SignupModal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  isSignup: PropTypes.bool.isRequired,
};

export default SignupModal;
