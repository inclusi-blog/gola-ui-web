import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { debounce } from 'lodash';
import ajax from '../../helpers/ajaxHelper';
import {
  ContinueButton,
  SignInText,
  UsernameInput,
  UsernameInputWrapper,
  UsernameLabel,
  UsernameUniqueTitle,
} from './Signup.style';

const UsernameInputScreen = ({ onSubmit }) => {
  const [usernameLabel, setUserNameLabel] = useState('Username');
  const [username, setUsername] = useState('');
  const [usernameExistsErr, setUsernameExistsErr] = useState(false);

  const checkUsernameAvailability = (value) => {
    if (value.length === 0) {
      setUserNameLabel('Please enter a username');
      setUsernameExistsErr(true);
      return;
    }
    ajax
      .post('/idp/v1/user/usernameAvailability', { username: value })
      .then(({ data }) => {
        const { isUsernameAvailable } = data;
        if (isUsernameAvailable) {
          setUsernameExistsErr(true);
          setUserNameLabel('Username already exist');
          return;
        }
        setUserNameLabel('Username');
        setUsernameExistsErr(false);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
      });
  };

  const delayedHandleChange = useRef(debounce((value) => checkUsernameAvailability(value), 700)).current;

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
        <UsernameLabel isError={usernameExistsErr}>{usernameLabel}</UsernameLabel>
        <UsernameInput
          isError={usernameExistsErr}
          value={username}
          onChange={({ target }) => {
            setUsername(target.value);
            setUserNameLabel('Username');
            setUsernameExistsErr(false);
            delayedHandleChange(target.value);
          }}
        />
      </UsernameInputWrapper>
      <div style={{ marginTop: 92 }}>
        <ContinueButton
          canSubmit={!usernameExistsErr}
          onClick={() => {
            if (!usernameExistsErr) {
              onSubmit(username);
            }
          }}
        >
          <SignInText>Continue</SignInText>
        </ContinueButton>
      </div>
    </div>
  );
};

UsernameInputScreen.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default UsernameInputScreen;
