import React from 'react';

import Img from './Img';
import WorldMap from '../../images/MapofValoran.jpg';

class MapImage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={'map-image'} >
        <Img src={WorldMap} alt="map of valaron" />
      </div>
    );
  }
}

export default MapImage;
