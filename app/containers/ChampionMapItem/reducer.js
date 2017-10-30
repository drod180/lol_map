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
  MOVE_ICONS,
  STOP_ICONS,
  START_ICONS,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  icons: [],
  width: 800,
  height: 800,
  moving: false,
  lastFrameTime: null,
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
          vector: [1, 1],
          target: [175, 476],
        };
        newIcons.push(icon);
      }

      const immutIcons = fromJS(newIcons);
      return state.update('icons', (arr) => arr.concat(immutIcons));
    }
    case MOVE_ICONS: {
      const newFrameTime = new Date();
      const multiplier = (newFrameTime - state.get('lastFrameTime')) / (1000 / 60);
      const icons = state.get('icons').map((icon) => {
        const [vx, vy] = icon.get('vector');
        // const [tx, ty] = icon.get('target');
        const x = icon.get('x');
        const y = icon.get('y');
        // const heading = [tx - x, ty - y];
        const newX = x + (vx * multiplier);
        const newY = y + (vy * multiplier);
        return icon.set('x', newX).set('y', newY);
      });

      return state.set('icons', icons).set('lastFrameTime', new Date());
    }
    case STOP_ICONS:

      return state.set('moving', false);
    case START_ICONS:

      return state.set('moving', true).set('lastFrameTime', new Date());
    default:
      return state;
  }
}

export default mapReducer;
