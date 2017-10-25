import React from 'react';
// import TestImg from '../../images/Amumu_Icon.png';
import Img from 'components/MapSectionIcon'

class MapSectionContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={'map-section map-section-top-left'} >
        <Img />
      </div>
    );
  }
}

export default MapSectionContainer;
