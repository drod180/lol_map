import React from 'react';
import PropTypes from 'prop-types';
import Overlay from './Overlay';
import StyledModal from './StyledModal';


function Modal(props) {
  const content = (
    <StyledModal className="modal-section">
      {props.content}
    </StyledModal>
  );
  return (
    <Overlay className="modal-overlay" modal={content} >
    </Overlay>
  );
}

Modal.propTypes = {
  content: PropTypes.object,
};

export default Modal;
