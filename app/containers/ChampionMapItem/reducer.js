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
  UPDATE_DIMS,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  icons: [],
  width: 800,
  height: 500,
  moving: false,
  lastFrameTime: null,
});

const getTargetDir = (x, y, [tx, ty]) => {
  const nx = tx - x;
  const ny = ty - y;
  return [nx, ny];
};

const updateVelocity = (x, y, [tx, ty]) => {
  let [nx, ny] = getTargetDir(x, y, [tx, ty]);
  const size = Math.sqrt((nx * nx) + (ny * ny));
  nx /= (size / 20);
  ny /= (size / 20);

  const multiplier = 30 / size;
  nx -= (nx * multiplier);
  ny -= (ny * multiplier);
  return [nx, ny];
};

function mapReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_ICONS: {
      const iconLength = state.get('icons').size;
      const newIcons = [];
      for (let i = 0; i < action.num; i += 1) {
        const icon = { id: iconLength + 1 + i,
          x: action.x,
          y: action.y,
          vector: [0, 0],
          target: [Math.random() * state.get('width'), Math.random() * state.get('height')],
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
        const [vx, vy] = updateVelocity(icon.get('x'),
          icon.get('y'),
          icon.get('target'));
        const x = icon.get('x');
        const y = icon.get('y');
        const newX = x + (vx * multiplier);
        const newY = y + (vy * multiplier);
        return icon.set('x', newX).set('y', newY).set('vector', [vx, vy]);
      });

      return state.set('icons', icons).set('lastFrameTime', new Date());
    }

    case STOP_ICONS:
      return state.set('moving', false);

    case START_ICONS: {
      return state.set('moving', true).set('lastFrameTime', new Date());
    }

    case UPDATE_DIMS:
      return state.set('width', action.width).set('height', action.height);

    default:
      return state;
  }
}

export default mapReducer;
