import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import HeaderWrapper from './Header.style';

// eslint-disable-next-line no-unused-vars
const Header = ({ location: { pathname } }) => {
  return (
    <div>
      <HeaderWrapper>
        <h1
          style={{
            margin: 0,
            fontFamily: 'Poppins',
          }}
        >
          Hello
        </h1>
      </HeaderWrapper>
    </div>
  );
};

Header.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default withRouter(Header);
