/**
 *
 * Overlay.js
 *
 * Renders an overlay
 */

import React from 'react';
import PropTypes from 'prop-types';
import StyledOverlay from './StyledOverlay';

function Overlay(props) {
  return (
    <StyledOverlay>
      {props.modal}
    </StyledOverlay>
  );
}

// We require the use of src and alt, only enforced by react in dev mode
Overlay.propTypes = {
  modal: PropTypes.any,
};

export default Overlay;
