import React from 'react';
import PropTypes from 'prop-types';

import ChampMapIcon from 'components/ChampMapIcon';

const ChampMapIconList = ({ props }) => (
  <g>{ props.champMapIcons=icons.map(icon => { <ChampMapIcon key={`champ-map-icon-${icon.id}` } { ...icon } /> }) }</g>
);

ChampMapIcons.propTypes = {
  champMapIcons: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }).isRequired).isRequired,
};
