/**
 * RepoListItem
 *
 * Lists the name and the issue count of a repository
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import ListItem from 'components/ListItem';
import Wrapper from './Wrapper';
import Icon from './ChampIcon';

export class ChampFilterItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const item = this.props.item;

    // Put together the content of the champion icon
    const content = (
      <Wrapper>
        <Icon src={`lol_map/app/images/${item.name}_Icon.png`} />
      </Wrapper>
    );

    // Render the content into a list item
    return (
      <ListItem key={`champ-filter-item-${item.name}`} item={content} />
    );
  }
}

ChampFilterItem.propTypes = {
  item: PropTypes.object,
};

export default connect(createStructuredSelector({
}))(ChampFilterItem);
