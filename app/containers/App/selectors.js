import { createSelector } from 'reselect';

const selectGlobal = (state) => state.get('global');

const selectRoute = (state) => state.get('route');

const makeSelectChampions = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('champions').toJS()
);

const makeSelectLocation = () => createSelector(
  selectRoute,
  (routeState) => routeState.get('location').toJS()
);

export {
  makeSelectLocation,
  makeSelectChampions,
};
