import React from 'react';
import PropTypes from 'prop-types';
import HoverProvider from 'context-providers/HoverProvider';

const Providers = ({ children }) => {
  return <HoverProvider>{children}</HoverProvider>;
};

Providers.propTypes = {
  children: PropTypes.element,
};

Providers.defaultProps = {
  children: null,
};

export default Providers;
