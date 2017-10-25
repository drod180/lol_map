import React from 'react';
import PropTypes from 'prop-types';
import Img from './Img';

function importAll(r) {
  const images = {};
  r.keys().map((item) => {
    images[item.replace('./', '')] = r(item);
    return true;
  });
  return images;
}

//  Imports all images that end with _Icon.png/jpeg/jpg/svg
const images = importAll(require.context('../../images/', false, /(_Icon)\.(png|jpe?g|svg)/));

function ChampIcon(props) {
  return (
    <Img
      src={images[props.src]}
      selected={props.selected}
      alt="champion - icon"
    />
  );
}

ChampIcon.propTypes = {
  src: PropTypes.string,
  selected: PropTypes.bool,
  onClick: PropTypes.func,
};

export default ChampIcon;
