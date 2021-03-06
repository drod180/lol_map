import React from 'react';
import PropTypes from 'prop-types';
import Image from './Image';

function importAll(r) {
  const images = {};
  r.keys().map((item) => {
    images[item.replace('./', '')] = r(item);
    return true;
  });
  return images;
}

//  Imports all images that end with _Icon.png/jpeg/jpg/svg
// <circle cx={props.x} cy={props.y} r="6" />;
const images = importAll(require.context('../../images/', false, /(_Icon)\.(png|jpe?g|svg)/));

function ChampMapIcon(props) {
  return (
    <g onClick={() => { props.callback(props.id); }}>
      <Image
        x={props.x}
        y={props.y}
        src={images[props.src]}
      />
    </g>
  );
}

ChampMapIcon.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  callback: PropTypes.func.isRequired,
};

export default ChampMapIcon;
