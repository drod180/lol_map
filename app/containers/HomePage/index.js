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
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
// import { FormattedMessage } from 'react-intl';


import ChampFilterItem from 'containers/ChampFilterItem';
import { makeSelectChampions } from 'containers/App/selectors';
import MapImage from 'components/MapImage';

// import messages from './messages';
// import reducer from './reducer';
// import { loadChampions } from '../App/actions';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <article>
        <Helmet>
          <title>League of Legends - Lore Map</title>
          <meta name="description" content="A runeaterra map" />
        </Helmet>
        <div>
          <MapImage />
        </div>
        <div>
          <p>{`${this.state}`}</p>
          <ChampFilterItem item={{name: 'Ornn'}} />
        </div>
        <p>{'test'}</p>
      </article>
    );
  }
}

HomePage.propTypes = {
  champions: PropTypes.array,
};

export default connect(createStructuredSelector({
  champions: makeSelectChampions(),
}))(HomePage);
