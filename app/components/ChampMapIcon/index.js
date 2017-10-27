import React from 'react';
import PropTypes from 'prop-types';

function ChampMapIcon(props) {
  return <circle cx={props.x} cy={props.y} r="2" />;
}

ChampMapIcon.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
};

export default ChampMapIcon;
