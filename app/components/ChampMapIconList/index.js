import React from 'react';
import PropTypes from 'prop-types';

import ChampMapIcon from 'components/ChampMapIcon';

function ChampMapIconList(props) {
  let content = <g></g>;
  if (props.champMapIcons.length > 0) {
    content = props.champMapIcons.map((icon) => (<ChampMapIcon key={`champ-map-icon-${icon.id}`} x={icon.x} y={icon.y} src={`${icon.champions.name}_Icon.png`} callback={icon.callback} id={icon.id} />));
  }
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
