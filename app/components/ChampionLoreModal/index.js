import React from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';

function ChampionLoreModal(props) {
  const content = (
    <div>
      <p>{props.id}</p>
      <p>{'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque, tellus vitae vestibulum dignissim, tellus mi pharetra sapien, sit amet eleifend nisi leo vitae sem. Nulla facilisi. Quisque diam velit, faucibus dapibus porttitor sed, placerat tempus eros. Cras dapibus lacus quis fermentum interdum. Nunc efficitur sollicitudin sapien non ornare. Nulla lectus mi, finibus et ligula et, condimentum placerat nunc. Etiam scelerisque pulvinar lectus, nec bibendum leo pretium et. Morbi elit sem, sollicitudin id eros nec, maximus maximus erat.'}
      </p>
    </div>
  );
  return (
    <Modal content={content} />
  );
}

ChampionLoreModal.propTypes = {
  id: PropTypes.number,
};

export default ChampionLoreModal;
