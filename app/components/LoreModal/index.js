import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'components/Modal';
import Header from 'components/ModalHeader';
import LoreText from './TextArea';
import Title from './Title';
import LoreSource from './Source';


export default function LoreModal(props) {
  const content = (
    <div>
      <Header champName={props.champName} callback={props.callback} />
      <Title>{props.title}</Title>
      <LoreText>{props.lore}</LoreText>
      <LoreSource source={props.source} />
    </div>
  );

  return (
    <Modal open={props.open} className="modal-overlay" content={content} backgroundColor={'rgba(0,255,0,1)'} >
    </Modal>
  );
}

LoreModal.propTypes = {
  title: PropTypes.string,
  lore: PropTypes.string,
  source: PropTypes.string,
  champName: PropTypes.string,
  callback: PropTypes.func,
  open: PropTypes.bool,
};
