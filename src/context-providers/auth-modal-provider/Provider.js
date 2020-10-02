import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

const Provider = ({ children }) => {
  const [modalName, setModalName] = useState('');
  const [showModal, setShowModal] = useState(false);

  return <Context.Provider value={{ modalName, setModalName, showModal, setShowModal }}>{children}</Context.Provider>;
};

Provider.propTypes = {
  children: PropTypes.element,
};

Provider.defaultProps = {
  children: null,
};

export default Provider;
