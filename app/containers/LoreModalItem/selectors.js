import { createSelector } from 'reselect';

const selectLoreModal = (state) => (state.get('loreModal'));

const makeSelectorLoreText = () => createSelector(
  selectLoreModal,
  (loreModalState) => loreModalState.get('loreText')
);

const makeSelectSource = () => createSelector(
  selectLoreModal,
  (loreModalState) => loreModalState.get('source')
);

const makeSelectName = () => createSelector(
  selectLoreModal,
  (loreModalState) => loreModalState.get('name')
);

const makeSelectTitle = () => createSelector(
  selectLoreModal,
  (loreModalState) => loreModalState.get('title')
);

const makeSelectDisplay = () => createSelector(
  selectLoreModal,
  (loreModalState) => loreModalState.get('display')
);

export {
  selectLoreModal,
  makeSelectorLoreText,
  makeSelectSource,
  makeSelectName,
  makeSelectTitle,
  makeSelectDisplay,
};
