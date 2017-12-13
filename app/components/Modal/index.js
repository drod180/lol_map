import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Overlay from './Overlay';
import StyledModal from './StyledModal';

const ModalControl = styled.div`
  display: none;

  ${(props) => props.open && css`
    display: block;
  `};
`;

function Modal(props) {
  const content = (
    <StyledModal className="modal-section">
      {props.content}
    </StyledModal>
  );
  return (
    <ModalControl open={props.open} >
      <Overlay className="modal-overlay" modal={content} />
    </ModalControl>
  );
}

Modal.propTypes = {
  content: PropTypes.object,
  open: PropTypes.bool,
};

export default Modal;
