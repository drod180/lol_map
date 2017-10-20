import React from 'react';
import PropTypes from 'prop-types';
import Img from './Img';
import Ornn from '../../images/Ornn_Icon.png';
function ChampIcon(props) {
  return (
    <Img src={Ornn} alt="champion - icon"/>
  );
}

ChampIcon.propTypes = {
  src: PropTypes.string,
};

export default ChampIcon;
