import React from 'react';
import PropTypes from 'prop-types';
import Img from './Img';

function ChampIcon(props) {
  return (
    <Img src={props.src} />
  );
}

ChampIcon.propTypes = {
  src: PropTypes.string,
};

export default ChampIcon;
