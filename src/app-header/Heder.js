import React from 'react';
import { withRouter } from 'react-router-dom';
import HeaderWrapper from './Header.style';

// eslint-disable-next-line react/prop-types,no-unused-vars
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

export default withRouter(Header);
