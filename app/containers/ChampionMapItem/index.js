import React from 'react';
import PropTypes from 'prop-types';
import * as d3 from 'd3';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import ChampMapIconList from 'components/ChampMapIconList';
import { createIcons, moveIcons, stopIcons, startIcons } from './actions';
import { makeSelectMapIcons, makeSelectMapWidth, makeSelectMapHeight, makeSelectIconsMoving } from './selectors';
import reducer from './reducer';

export class ChampionMapItem extends React.PureComponent {
  componentDidMount() {
    const svg = d3.select(this.svg);

    this.props.createIcons();

    svg.on('mousedown', () => {
      this.startTicker();
    });
    //
    // svg.on('touchstart', () => {
    //   this.props.moveIcons();
    // });
    //
    svg.on('mouseup', () => {
      this.stopTicker();
    });
    //
    // svg.on('touchend', () => {
    //   this.props.stopIcons();
    // });
    //
    // svg.on('mouseleave', () => {
    //   this.props.stopIcons();
    // });
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

    return (
      <div
        role="presentation"
        tabIndex={-1}
        style={{ overflow: 'hidden' }}
      >
        <svg
          width={this.props.mapWidth}
          height={this.props.mapHeight}
          ref={(c) => { this.svg = c; }}
          style={{ background: 'rgba(124, 224, 249, .3)' }}
        >
          <ChampMapIconList champMapIcons={champMapIcons} />
        </svg>
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
};

export function mapDispatchToProps(dispatch) {
  return {
    createIcons: () => dispatch(createIcons(10, 10, 10)),
    moveIcons: () => dispatch(moveIcons()),
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
