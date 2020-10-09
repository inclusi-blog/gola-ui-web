import React from 'react';
import PropTypes from 'prop-types';
import BellImg from 'assets/images/bell.svg';
import NotifyBellImg from 'assets/images/notifybell.svg';
import BellIcon from './NotifyBell.style';

const NotifyBell = ({ unreadNotification }) => {
  return (
    <div>
      <If condition={unreadNotification > 0}>
        <BellIcon src={NotifyBellImg} />
        <Else />
        <BellIcon src={BellImg} />
      </If>
    </div>
  );
};
NotifyBell.propTypes = {
  unreadNotification: PropTypes.number.isRequired,
};

export default NotifyBell;
