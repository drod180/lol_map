import React from 'react';
import PropTypes from 'prop-types';

const ChampMapIcon = ({x, y}) => (
  <circle cx={x} cy={y} r="2" />
);

ChampMapIcon.prop-types = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
};

export default ChampMapIcon;
