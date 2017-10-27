import React from 'react';
import PropTypes from 'prop-types';

import ChampMapIcon from 'components/ChampMapIcon';

function ChampMapIconList(props) {
  const content = props.champMapIcons.map((icon) => (<ChampMapIcon key={`champ-map-icon-${icon.id}`} x={icon.x} y={icon.y} />));

  return (
    <g>
      {content}
    </g>
  );
}

ChampMapIconList.propTypes = {
  champMapIcons: PropTypes.array.isRequired,
};

export default ChampMapIconList;
