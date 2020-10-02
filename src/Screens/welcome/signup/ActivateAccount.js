import React from 'react';
import PropTypes from 'prop-types';
import {
  AcknowledgeWrapper,
  CenterAcknowledgeWrapper,
  EmailSentAcknowledgeText,
  ChangeEmailSection,
  VerifyContent,
  ResendEmailSection,
} from './ActivateAccount.style';

const ActivateAccount = ({ location }) => {
  const { state } = location;
  const { email } = state;

  return (
    <AcknowledgeWrapper>
      <CenterAcknowledgeWrapper>
        <div style={{ borderBottom: '1px solid #DEE3ED' }}>
          <VerifyContent>Verify your email address</VerifyContent>
          <EmailSentAcknowledgeText>
            You’re almost done! A verification message has been sent to <strong>{email}</strong>
          </EmailSentAcknowledgeText>
          <ChangeEmailSection>
            Just check your email and follow the link to finish creating your Mensuvadi Account. Entered the wrong
            address? <a href="https://www.google.com">Change your email.</a>
          </ChangeEmailSection>
        </div>
        <ResendEmailSection>Can’t find the email ? Resend verification or visit help center</ResendEmailSection>
      </CenterAcknowledgeWrapper>
    </AcknowledgeWrapper>
  );
};

ActivateAccount.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      email: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ActivateAccount;
