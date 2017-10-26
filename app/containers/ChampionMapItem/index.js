import React from 'react';
import PropTypes from 'prop-types';
import * as d3 from 'd3;'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import ChampionMapIconList from 'components/ChampMapIconList';
import { createIcons, startIcons, stopIcons } from './actions';

export class ChampionMapItem extends React.PureComponent {
  componentDidMount() {
    let svg = d3.select(this.refs.svg);

    svg.on('mousedown', () => {
      this.props.startIcons();
    });

    svg.on('touchstart', () => {
      this.props.startIcons();
    });

    svg.on('mouseup', () => {
        this.props.stopIcons();
    });

    svg.on('touchend', () => {
        this.props.stopIcons();
    });

    svg.on('mouseleave', () => {
        this.props.stopIcons();
    });
  }

  render() {
    return (
      <div onClick={ this.props.createIcons } style={{ overflow: 'hidden' }} >
        <svg
          width={ this.props.mapWidth }
          height={ this.props.mapHeight }
          ref="svg"
          style={{ background: 'rgba(124, 224, 249, .3)' }} >
          <ChampionMapIconList champMapIcons={ this.props.champMapIcons } />
        </svg>
      </div>
    )
  }
}

ChampionMapItem.propTypes = {
  mapWidth: PropTypes.number.isRequired,
  mapHeight: PropTypes.number.isRequired,
  startIcons: PropTypes.func.isRequired,
  stopIcons: PropTypes.func.isRequired,
  createIcons: PropTypes.func.isRequired,
}

export function mapDispatchToProps(dispatch) {
  return {
    createIcons: () => dispatch(createIcons(10, 10, 10)),
    startIcons: () => dispatch(startIcons()),
    stopIcons: () => dispatch(stopIcons()),
  }
}

const mapStateToProps = createStructuredSelector({
  mapWidth: makeSelectMapWidth(),
  mapHeight: makeSelectMapHeight(),
});

export default connect(createStructuredSelector({
  currentUser: makeSelectCurrentUser(),
}))(RepoListItem);

export default ChampionMapItem;
