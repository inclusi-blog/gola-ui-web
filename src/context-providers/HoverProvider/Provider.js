import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

const Provider = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [linkValue, setLinkValue] = useState('');
  const [clientX, setClientX] = useState(0);
  const [clientY, setClientY] = useState(0);

  return (
    <Context.Provider
      value={{ isHovered, setIsHovered, linkValue, setLinkValue, clientX, clientY, setClientX, setClientY }}
    >
      {children}
    </Context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.element,
};

Provider.defaultProps = {
  children: null,
};

export default Provider;
