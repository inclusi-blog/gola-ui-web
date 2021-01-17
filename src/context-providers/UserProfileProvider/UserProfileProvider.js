import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './UserProfileContext';

const UserProfileProvider = ({ children }) => {
  const [showProfileTooltip, setShowProfileTooltip] = useState(false);

  return (
    <Context.Provider
      value={{
        showProfileTooltip,
        setShowProfileTooltip,
      }}
    >
      {children}
    </Context.Provider>
  );
};

UserProfileProvider.propTypes = {
  children: PropTypes.element,
};

UserProfileProvider.defaultProps = {
  children: null,
};

export default UserProfileProvider;
