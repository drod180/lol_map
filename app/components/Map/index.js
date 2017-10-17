import React from 'react';
import { FormattedMessage } from 'react-intl';

import Img from './Img';
import WorldMap from '../../images/MapofValoran.jpg'

class Map extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Img src={WorldMap} alt="map of valaron"/>
      </div>
    );
  }
}

export default Map;
