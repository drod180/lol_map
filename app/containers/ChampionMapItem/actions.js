/*
 * MapItem Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  CREATE_ICONS,
  MOVE_ICONS,
  START_ICONS,
  STOP_ICONS,
  UPDATE_DIMS,
  UPDATE_HOME,
  UPDATE_MAP_TARGETS,
  UPDATE_TARGET,
} from './constants';


export function createIcons(champIds) {
  return {
    type: CREATE_ICONS,
    champIds,
  };
}

export function moveIcons() {
  return {
    type: MOVE_ICONS,
  };
}

export function stopIcons() {
  return {
    type: STOP_ICONS,
  };
}

export function startIcons() {
  return {
    type: START_ICONS,
  };
}

export function updateDimensions(width, height) {
  return {
    type: UPDATE_DIMS,
    width,
    height,
  };
}

export function updateHomeCoords() {
  return {
    type: UPDATE_HOME,
  };
}

export function updateMapTargets() {
  return {
    type: UPDATE_MAP_TARGETS,
  };
}

export function updateTarget(iconTarget) {
  return {
    type: UPDATE_TARGET,
    iconTarget,
  };
}
