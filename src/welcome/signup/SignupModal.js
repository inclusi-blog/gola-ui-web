import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import FacebookImg from 'assets/images/Facebook.svg';
import GoogleImg from 'assets/images/google.svg';
import LinkedinImg from 'assets/images/LinkedIn.svg';
import TwitterImg from 'assets/images/Twitter.png';
import {
  SignupHeader,
  SignupContainer,
  Twitter,
  Facebook,
  Google,
  LinkedIn,
  SignupWrapper,
  SignupLabelContainer,
  SignupLabel,
  EmailLabel,
  EmailInput,
  PassLabel,
  PasswordInput,
  SignInButton,
  SignInTxt,
  TxtContainer,
  AccountTxt,
  SignUpLink,
  ForgetPass,
} from './Signup.style';

const SignupModal = ({ showModal, closeModal }) => {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      borderRadius: '10px',
      borderColor: 'black',
      width: '646px',
      height: '695px',
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
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <SignupHeader>Mensuvadi</SignupHeader>
      </div>
      <SignupContainer>
        <Google src={GoogleImg} />
        <Facebook src={FacebookImg} />
        <Twitter src={TwitterImg} />
        <LinkedIn src={LinkedinImg} />
      </SignupContainer>
      <SignupLabelContainer>
        <SignupLabel>or sign in with</SignupLabel>
      </SignupLabelContainer>
      <SignupWrapper>
        <EmailLabel>Email</EmailLabel>
        <EmailInput placeholder="abc_123@gmail.com" />
        <PassLabel>Password</PassLabel>
        <PasswordInput />
        <SignInButton>
          <SignInTxt>Sign in</SignInTxt>
        </SignInButton>
        <TxtContainer>
          <AccountTxt>Don’t have an account ?</AccountTxt>
          <SignUpLink>Sign up</SignUpLink>
          <ForgetPass>Forgot password ?</ForgetPass>
        </TxtContainer>
      </SignupWrapper>
    </Modal>
  );
};

SignupModal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default SignupModal;
