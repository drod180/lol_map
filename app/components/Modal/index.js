import React from 'react';
import PropTypes from 'prop-types';

function Modal(props) {
  return (
    <div className="modal-overlay">
      {props.content}
    </div>
  );
}

Modal.propTypes = {
  content: PropTypes.object,
};

export default Modal;
