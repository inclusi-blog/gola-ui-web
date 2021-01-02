import React from 'react';
import PropTypes from 'prop-types';
import Portal from '../Portal/Portal';

const FlowModal = ({ children, onClose }) => {
  return (
    <Portal id="modal-root">
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          zIndex: 96,
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'center',
          overflowX: 'hidden',
          overflowY: 'auto',
          backgroundColor: 'transparent',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onClick={(event) => {
          event.preventDefault();
          if (event.target === event.currentTarget) {
            onClose();
          }
        }}
      >
        {children}
      </div>
    </Portal>
  );
};

FlowModal.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
  onClose: PropTypes.func,
};

FlowModal.defaultProps = {
  children: null,
  onClose: () => {},
};

export default FlowModal;
