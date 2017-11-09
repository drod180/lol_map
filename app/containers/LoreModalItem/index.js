import React from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { compose } from 'redux';
// import { createStructuredSelector } from 'reselect';

// import injectReducer from 'utils/injectReducer';
import LoreModal from 'components/LoreModal';
// import { createIcons, moveIcons, stopIcons, startIcons, openModal } from './actions';
// import { makeSelectMapIcons, makeSelectMapWidth, makeSelectMapHeight, makeSelectIconsMoving } from './selectors';
// import reducer from './reducer';


export class LoreModalItem extends React.PureComponent {
  render() {
    const loreText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet elementum magna. Nullam dignissim pretium bibendum. Mauris ultrices dapibus elit, nec tempus mauris tempor in. Sed dolor mi, elementum ac elementum quis, tincidunt nec odio. Integer eget ultricies nunc. In sed metus ullamcorper, interdum nibh vitae, tincidunt dolor. Aenean pellentesque et dui sed fringilla. In pulvinar tortor quis mauris convallis, nec laoreet metus faucibus. Sed cursus, leo ut tristique mattis, quam libero bibendum urna, pharetra accumsan eros nisl vehicula libero.';
    const source = 'www.google.com';
    const name = 'Dan The Man';
    const title = 'The Real Story';
    const callback = () => { console.log('Closed!'); };

    return (
      <LoreModal
        lore={loreText}
        source={source}
        champName={name}
        title={title}
        callback={callback}
      />
    );
  }
}

export default LoreModalItem;
// LoreModalItem.propTypes = {
// };

// export function mapDispatchToProps(dispatch) {
//   return {
//   };
// }

// const mapStateToProps = createStructuredSelector({
// });

// const withReducer = injectReducer({ key: 'modal', reducer });

// const withConnect = connect(mapStateToProps, mapDispatchToProps);

// export default compose(
//   withReducer,
//   withConnect,
// )(ChampionMapItem);
