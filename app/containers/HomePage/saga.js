import { put, takeLatest } from 'redux-saga/effects';
import { UPDATE_DIMS } from 'containers/ChampionMapItem/constants';
import { updateHomeCoords, updateMapTargets } from 'containers/ChampionMapItem/actions';

export function* updateScreenItems() {
  try {
    yield put(updateMapTargets());
    yield put(updateHomeCoords());
  } catch (err) {
    console.log(`Error updating screen: ${err}`);
  }
}

export default function* adjustToScreen() {
  yield takeLatest(UPDATE_DIMS, updateScreenItems);
}
