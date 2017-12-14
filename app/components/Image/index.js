/**
 *
 * Image.js
 *
 * Renders an svg image, enforcing the usage of the alt="" tag
 */

import React from 'react';
import PropTypes from 'prop-types';

function Image(props) {
  return (
    <image className={props.className} xlinkHref={props.src} x={props.x} y={props.y} />
  );
}

// We require the use of src and alt, only enforced by react in dev mode
Image.propTypes = {
  src: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  className: PropTypes.string,
};

export default Image;
