import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

const SignupModal = ({ showModal, closeModal }) => {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      borderRadius: '10px',
      borderColor: 'black',
      width: '678px',
      height: '695px',
    },
    overlay: {
      backgroundColor: 'transparent',
    },
  };
  return (
    <Modal
      closeTimeoutMS={500}
      isOpen={showModal}
      onAfterOpen={() => {}}
      onRequestClose={() => {
        document.body.classList.remove('ReactModal__Body--before-close');
        closeModal();
      }}
      contentLabel="Example Modal"
      style={customStyles}
    >
      <p>hello from modal</p>
    </Modal>
  );
};

SignupModal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default SignupModal;
