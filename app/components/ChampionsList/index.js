import React from 'react';
import PropTypes from 'prop-types';

import List from 'components/List';
import ListItem from 'components/ListItem';
import ChampionFilterItem from 'containers/ChampionFilterItem';

function ChampionsList(props) {

  if (props.champions.length === 0) {
    const ErrorComponent = () => (
      <ListItem item={'No Champions :('} />
    );
    return <List component={ErrorComponent} />;
  }

  if (props.champions.length >= 1) {
    return <List items={props.champions} component={ChampionFilterItem} />;
  }

  return null;
}

ChampionsList.propTypes = {
  champions: PropTypes.array,
};

export default ChampionsList;
