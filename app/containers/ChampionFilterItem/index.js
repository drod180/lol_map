/**
 * RepoListItem
 *
 * Lists the name and the issue count of a repository
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { updateTarget } from 'containers/ChampionMapItem/actions';
import ListItem from 'components/ListItem';
import Wrapper from './Wrapper';
import ChampIcon from './ChampIcon';
import { toggleChampionSelect } from '../App/actions';

export class ChampFilterItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const item = this.props.item;
    const toggleIcon = () => { this.props.onIconClick(item.id, item.selected); };
    // Put together the content of the champion icon
    const content = (
      <Wrapper>
        <ChampIcon
          src={`${item.name}_Icon.png`}
          selected={item.selected}
        />
      </Wrapper>
    );
    // Render the content into a list item
    return (
      <button
        className={'champ-icon-button'}
        onClick={toggleIcon}
        role={'menuitem'}
        tabIndex={0}
      >
        <ListItem
          key={`champ-filter-item-${item.name}`}
          item={content}
        />
      </button>
    );
  }
}

ChampFilterItem.propTypes = {
  item: PropTypes.object,
  onIconClick: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onIconClick: (id, selected) => {
      dispatch(toggleChampionSelect(id));
      dispatch(updateTarget([id, !selected]));
    },
  };
}

const mapStateToProps = createStructuredSelector({
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withConnect,
)(ChampFilterItem);
