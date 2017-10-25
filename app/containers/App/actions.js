/*
 * App Actions
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
  TOGGLE_FILTER_ICON,
} from './constants';

/**
 * Toggles the filter champion icon
 *
 * @param  {id} id of the icon to be filtered
 *
 * @return {object} An action object with a type of TOGGLE_FILTER_ICON
 */
export function toggleChampionSelect(id) {
  return {
    type: TOGGLE_FILTER_ICON,
    id,
  };
}
