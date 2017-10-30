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
} from './constants';


export function createIcons(num, x, y) {
  return {
    type: CREATE_ICONS,
    num,
    x,
    y,
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
