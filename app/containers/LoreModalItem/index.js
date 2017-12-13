import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import LoreModal from 'components/LoreModal';
import { closeModal } from './actions';
import { makeSelectorLoreText, makeSelectSource, makeSelectName, makeSelectTitle, makeSelectDisplay } from './selectors';
import reducer from './reducer';


export class LoreModalItem extends React.PureComponent {
  render() {
    const callback = () => { this.props.closeModal(); };

    return (
      <LoreModal
        lore={this.props.loreText}
        source={this.props.source}
        champName={this.props.name}
        title={this.props.title}
        callback={callback}
        open={this.props.display}
      />
    );
  }
}

LoreModalItem.propTypes = {
  closeModal: PropTypes.func.isRequired,
  loreText: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  display: PropTypes.bool.isRequired,
};

export function mapDispatchToProps(dispatch) {
  return {
    closeModal: () => dispatch(closeModal()),
  };
}
const mapStateToProps = createStructuredSelector({
  loreText: makeSelectorLoreText(),
  source: makeSelectSource(),
  name: makeSelectName(),
  title: makeSelectTitle(),
  display: makeSelectDisplay(),
});

const withReducer = injectReducer({ key: 'loreModal', reducer });

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withReducer,
  withConnect,
)(LoreModalItem);
