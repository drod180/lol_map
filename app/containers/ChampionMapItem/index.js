import React from 'react';
import PropTypes from 'prop-types';
import * as d3 from 'd3';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import ChampMapIconList from 'components/ChampMapIconList';
import MapImage from 'components/MapImage';
import { createIcons, moveIcons, stopIcons, startIcons, openModal } from './actions';
import { makeSelectMapIcons, makeSelectMapWidth, makeSelectMapHeight, makeSelectIconsMoving } from './selectors';
import reducer from './reducer';


export class ChampionMapItem extends React.PureComponent {
  componentDidMount() {
    const svg = d3.select(this.svg);

    svg.on('mouseover', () => {
      const champIds = this.props.champions.map((champ) => ({ id: champ.id }));
      this.props.createIcons(champIds);
    });

    svg.on('mousedown', () => {
      this.startTicker();
    });

    svg.on('mouseup', () => {
      this.stopTicker();
    });
  }

  componentWillUnmount() {
    this.stopTicker();
  }

  animationFrameId = 0;

  startTicker() {
    const ticker = () => {
      if (this.props.iconsMoving) {
        this.props.moveIcons();
        this.animationFrameId = window.requestAnimationFrame(ticker);
      }
    };

    if (!this.props.iconsMoving) {
      this.props.startIcons();
      ticker();
    } else {
      ticker();
    }
  }

  stopTicker() {
    if (this.props.iconsMoving) {
      this.props.stopIcons();
    }
    window.cancelAnimationFrame(this.animationFrameId);
  }

  render() {
    const champMapIcons = this.props.champMapIcons.toJS();

    for (let i = 0; i < champMapIcons.length; i += 1) {
      champMapIcons[i] = {
        ...champMapIcons[i],
        champions: this.props.champions[i],
        callback: this.props.openModal,
      };
    }
    return (
      <div
        role="presentation"
        tabIndex={-1}
        style={{ overflow: 'hidden', height: this.props.mapHeight, width: this.props.mapWidth }}
        className="map-container"
      >
        <MapImage />
        <div className="map-items">
          <svg
            width={this.props.mapWidth}
            height={this.props.mapHeight}
            ref={(c) => { this.svg = c; }}
            style={{ background: 'rgba(255, 255, 255, 0)' }}
          >
            <ChampMapIconList champMapIcons={champMapIcons} />
          </svg>
        </div>
      </div>
    );
  }
}

ChampionMapItem.propTypes = {
  champMapIcons: PropTypes.object.isRequired,
  mapWidth: PropTypes.number.isRequired,
  mapHeight: PropTypes.number.isRequired,
  moveIcons: PropTypes.func.isRequired,
  startIcons: PropTypes.func.isRequired,
  stopIcons: PropTypes.func.isRequired,
  iconsMoving: PropTypes.bool.isRequired,
  createIcons: PropTypes.func.isRequired,
  champions: PropTypes.array.isRequired,
  openModal: PropTypes.func.isRequired,
};

export function mapDispatchToProps(dispatch) {
  return {
    createIcons: (champIds) => dispatch(createIcons(champIds)),
    moveIcons: () => dispatch(moveIcons()),
    openModal: (id) => dispatch(openModal(id)),
    stopIcons: () => dispatch(stopIcons()),
    startIcons: () => dispatch(startIcons()),
  };
}

const mapStateToProps = createStructuredSelector({
  champMapIcons: makeSelectMapIcons(),
  mapWidth: makeSelectMapWidth(),
  mapHeight: makeSelectMapHeight(),
  iconsMoving: makeSelectIconsMoving(),
});

const withReducer = injectReducer({ key: 'map', reducer });

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withReducer,
  withConnect,
)(ChampionMapItem);
