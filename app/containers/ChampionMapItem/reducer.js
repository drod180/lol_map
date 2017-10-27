/*
 * MapReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable';

import {
  CREATE_ICONS,
  START_ICONS,
  STOP_ICONS,
  TIME_TICK,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  icons: [],
  width: 800,
  height: 800,
});

function mapReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_ICONS: {
      const iconLength = state.get('icons').size;
      const newIcons = [];

      for (let i = 0; i < action.num; i += 1) {
        const icon = { id: iconLength + 1 + i,
          x: 115,
          y: 115,
          vector: [1, 1]
        };
        newIcons.push(icon);
      }

      const immutIcons = fromJS(newIcons);
      return state.update('icons', (arr) => arr.concat(immutIcons));
    }
    case START_ICONS:

      return state;
    case STOP_ICONS:

      return state;
    case TIME_TICK:

      return state;
    default:
      return state;
  }
}

export default mapReducer;
