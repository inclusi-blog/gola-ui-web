import React, {useContext, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import Context from './UserProfileContext';
import LoggedInContext from "../loggedin-provider/LoggedInContext";
import {getUserProfileDetails} from "../../Screens/UserProfilePage/userprofile.service";

const UserProfileProvider = ({ children }) => {
  const [showProfileTooltip, setShowProfileTooltip] = useState(false);
  const [userDetails, setUserDetails] = useState({});
  const {isLoggedIn} = useContext(LoggedInContext);

    useEffect(() => {
        if (isLoggedIn) {
            getUserProfileDetails()
                .then(({ data }) => {
                    console.log(data);
                    setUserDetails(data);
                })
                .catch((err) => {
                    // eslint-disable-next-line no-console
                    console.log('something went wrong - unable to get User Profile Details : ', err);
                });
        }
    }, [isLoggedIn]);

  return (
    <Context.Provider
      value={{
        showProfileTooltip,
        setShowProfileTooltip,
        userDetails,
        setUserDetails
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
