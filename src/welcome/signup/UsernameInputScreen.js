import React, { useState } from 'react';
import {
  ContinueButton,
  SignInText,
  UsernameInput,
  UsernameInputWrapper,
  UsernameLabel,
  UsernameUniqueTitle,
} from './Signup.style';

const UsernameInputScreen = () => {
  // eslint-disable-next-line no-unused-vars
  const [usernameLabel, setUserNameLabel] = useState('Username');
  const [username, setUsername] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [usernameExistsErr, setUsernameExistsErr] = useState(false);

  return (
    <div
      style={{
        paddingLeft: 57,
        paddingRight: 57,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'column',
      }}
    >
      <UsernameUniqueTitle>Let’s keep you unique! choose a username.</UsernameUniqueTitle>
      <UsernameInputWrapper>
        <UsernameLabel>{usernameLabel}</UsernameLabel>
        <UsernameInput
          isError={usernameExistsErr}
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />
      </UsernameInputWrapper>
      <div style={{ marginTop: 92 }}>
        <ContinueButton canSubmit={false} onClick={() => {}}>
          <SignInText>Continue</SignInText>
        </ContinueButton>
      </div>
    </div>
  );
};

export default UsernameInputScreen;
