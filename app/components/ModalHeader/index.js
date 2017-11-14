/*
* ModalHeader.js
*
* Renders an modal header
*/

import React from 'react';
import PropTypes from 'prop-types';

import ChampionName from './ChampionName';
import CloseIcon from './CloseIcon';
import image from './close_x.png';

function ModalHeader(props) {
  return (
    <div role="presentation">
      <ChampionName>{props.champName}</ChampionName>
      <CloseIcon
        image={image}
        callback={props.callback}
      />
    </div>
  );
}

// We require the use of src and alt, only enforced by react in dev mode
ModalHeader.propTypes = {
  callback: PropTypes.func,
  champName: PropTypes.string,
};

export default ModalHeader;
