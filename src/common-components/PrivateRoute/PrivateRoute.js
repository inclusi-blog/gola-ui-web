import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import LoggedInContext from 'context-providers/loggedin-provider/LoggedInContext';
import { LOGIN_PATH } from 'helpers/routes';

const PrivateRoute = ({ component: ComponentToRender, ...restProps }) => {
  const { isLoggedIn } = useContext(LoggedInContext);

  return (
    <Route
      {...restProps}
      render={(props) => {
        if (isLoggedIn) {
          return <ComponentToRender {...props} />;
        }
        return (
          <Redirect
            to={{
              pathname: LOGIN_PATH,
            }}
          />
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  component: PropTypes.any.isRequired,
};

export default PrivateRoute;
