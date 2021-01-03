import { useEffect } from 'react';
import PropTypes from 'prop-types';

const useEscapeHandler = ({ onEscape }) => {
  const escFunction = (event) => {
    if (event.keyCode === 27) {
      onEscape();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', escFunction, false);
    return () => document.removeEventListener('keydown', escFunction, false);
  });
};

useEscapeHandler.propTypes = {
  onEscape: PropTypes.func.isRequired,
};

export default useEscapeHandler;
