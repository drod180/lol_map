import React from 'react';
// import PropTypes from 'prop-types';
import Img from './Img';
import TestImg from '../../images/Amumu_Icon.png';

// function importAll(r) {
//   const images = {};
//   r.keys().map((item) => {
//     images[item.replace('./', '')] = r(item);
//     return true;
//   });
//   return images;
// }
//
// //  Imports all images that end with _Icon.png/jpeg/jpg/svg
// const images = importAll(require.context('../../images/', false, /(_Icon)\.(png|jpe?g|svg)/));

function ChampIcon() {
  return (
    <Img
      src={TestImg}
      alt="champion - test icon"
    />
  );
}

// ChampIcon.propTypes = {
//   src: PropTypes.string,
//   selected: PropTypes.bool,
//   onClick: PropTypes.func,
// };

export default ChampIcon;
