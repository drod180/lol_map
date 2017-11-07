import { createSelector } from 'reselect';

const selectMap = (state) => (state.get('map'));

const makeSelectMapWidth = () => createSelector(
  selectMap,
  (mapState) => mapState.get('width')
);

const makeSelectMapHeight = () => createSelector(
  selectMap,
  (mapState) => mapState.get('height')
);

const makeSelectMapIcons = () => createSelector(
  selectMap,
  (mapState) => mapState.get('icons')
);

const makeSelectIconsMoving = () => createSelector(
  selectMap,
  (mapState) => mapState.get('moving')
);

export {
  selectMap,
  makeSelectMapIcons,
  makeSelectMapWidth,
  makeSelectMapHeight,
  makeSelectIconsMoving,
};
