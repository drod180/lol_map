/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
// import { findDOMNode } from 'react-dom';
// import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
// import { FormattedMessage } from 'react-intl';

import { makeSelectChampions } from 'containers/App/selectors';
import ChampionsList from 'components/ChampionsList';
import ChampionMapItem from 'containers/ChampionMapItem';
import { updateDimensions } from 'containers/ChampionMapItem/actions';
// import messages from './messages';
// import reducer from './reducer';
// import { loadChampions } from '../App/actions';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize.bind(this));
  }

  handleResize() {
    // Set the width based on the div size and height based on width and img aspect
    const divWidth = this.mapSection.attributes.id.ownerElement.clientWidth;
    const divHeight = divWidth * (105 / 168);
    this.props.updateDimensions(divWidth, divHeight);
  }

  render() {
    return (
      <article>
        <Helmet>
          <title>League of Legends - Lore Map</title>
          <meta name="description" content="A runeaterra map" />
        </Helmet>
        <div id="map-section" ref={(c) => { this.mapSection = c; }}>
          <ChampionMapItem champions={this.props.champions} />
        </div>
        <div id="filter-section" className={'map-filter'}>
          <ChampionsList champions={this.props.champions} />
        </div>
      </article>
    );
  }
}

HomePage.propTypes = {
  champions: PropTypes.array,
  updateDimensions: PropTypes.func.isRequired,
};

export function mapDispatchToProps(dispatch) {
  return {
    updateDimensions: (width, height) => dispatch(updateDimensions(width, height)),
  };
}

const mapStateToProps = createStructuredSelector({
  champions: makeSelectChampions(),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
