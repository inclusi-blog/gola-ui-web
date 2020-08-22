import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

const Provider = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [linkValue, setLinkValue] = useState('');

  return <Context.Provider value={{ isHovered, setIsHovered, linkValue, setLinkValue }}>{children}</Context.Provider>;
};

Provider.propTypes = {
  children: PropTypes.element,
};

Provider.defaultProps = {
  children: null,
};

export default Provider;
