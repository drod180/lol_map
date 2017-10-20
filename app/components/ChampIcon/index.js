import React from 'react';
import PropTypes from 'prop-types';
import Img from './Img';

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('../../images/', false, /(_Icon)\.(png|jpe?g|svg)/));

function ChampIcon(props) {
  return (
    <Img src={images[props.src]} alt="champion - icon" />
  );
}

ChampIcon.propTypes = {
  src: PropTypes.string,
};

export default ChampIcon;
