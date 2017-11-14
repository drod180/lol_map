import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

import Img from 'components/Img';

const CloseImg = styled(Img)`
  position: absolute;
  right: 0;
  top: 0;
  height: 45px;
  display: inline-block;
  float: right;
  opacity: 0.7;
  transform: scale(1) rotate(0);
  transition: all 250ms linear;

  &:hover {
    transform: scale(1.25) rotate(90deg);
    transition: all 250ms linear;
    cursor: pointer;
  }

  &:active {
    opacity: 1;
  }
`;

function CloseIcon(props) {
  return (
    <div role="presentation" onClick={() => { props.callback(); }} >
      <CloseImg alt={'close-modal-icon'} src={props.image} />
    </div>
  );
}

CloseIcon.propTypes = {
  callback: PropTypes.func,
  image: PropTypes.any,
};


export default CloseIcon;
