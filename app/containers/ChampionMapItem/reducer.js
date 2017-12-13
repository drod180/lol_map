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
  UPDATE_HOME,
  UPDATE_MAP_TARGETS,
  UPDATE_TARGET,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  icons: [],
  width: 0,
  height: 0,
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
  let multiplier = 0;
  if (size !== 0) {
    nx /= (size / 20);
    ny /= (size / 20);
    multiplier = 30 / size;
  } else {
    nx = 0;
    ny = 0;
  }

  nx -= (nx * multiplier);
  ny -= (ny * multiplier);
  return [nx, ny];
};

const getMapCoords = (location, width, height) => {
  // Map locations as percentages for map position
  const locations = {
    shadowIsles: [5, 5],
    freljord: [48, 8],
    piltover: [60, 16],
    zaun: [63, 18],
    noxus: [70, 45],
    ionia: [90, 20],
  };

  return [(locations[location][0] * width) / 100, (locations[location][1] * height) / 100];
};

const getHomeCoords = (i, width, height) => {
  let homeX = 0;
  let homeY = 0;
  if (i % 4 === 0) {
    homeX = i * 5;
    homeY = -50;
  } else if (i % 4 === 1) {
    homeX = -50;
    homeY = i * 5;
  } else if (i % 4 === 2) {
    homeX = width + 50;
    homeY = i * 5;
  } else {
    homeX = i * 5;
    homeY = height + 50;
  }

  return [homeX, homeY];
};

const buildIcon = (id, homeCoords, mapTarget) => ({
  id,
  x: mapTarget[0],
  y: mapTarget[1],
  vector: [0, 0],
  home: homeCoords,
  mapTarget,
  target: mapTarget,
  location: 'mapTarget',
});

const checkLocation = (vx, vy, target, home) => {
  if (Math.abs(vx) <= 0.01 && Math.abs(vy) <= 0.01) {
    return target === home ? 'home' : 'mapTarget';
  }

  return 'moving';
};

const updateMapPoint = (state, mapPointStr, callback, callbackArg) => {
  const height = state.get('height');
  const width = state.get('width');
  const icons = state.get('icons').map((icon, i) => {
    const cbArg = callbackArg || i;
    let mapPoint = callback(cbArg, width, height);
    let x = icon.get('x');
    let y = icon.get('y');
    // Allow the icon to move with map as it scales
    if (icon.get('location') === mapPointStr) {
      [x, y] = mapPoint;
    }

    mapPoint = fromJS(mapPoint);
    // Set the target to new map value if that is current target
    if (icon.get('target').equals(icon.get(mapPointStr))) {
      return icon.set('x', x).set('y', y).set(mapPointStr, mapPoint).set('target', mapPoint);
    }
    return icon.set('x', x).set('y', y).set(mapPointStr, mapPoint);
  });

  return state.set('icons', icons);
};

function mapReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_ICONS: {
      const newIcons = [];
      const currentIcons = state.get('icons').map((icon) => (icon.get('id')));
      for (let i = 0; i < action.champIds.length; i += 1) {
        if (!currentIcons.includes(action.champIds[i].id)) {
          const homeCoords = getHomeCoords(i, state.get('width'), state.get('height'));
          const mapTarget = getMapCoords('zaun', state.get('width'), state.get('height'));
          const icon = buildIcon(action.champIds[i].id, homeCoords, mapTarget);
          newIcons.push(icon);
        }
      }
      if (newIcons.length >= 1) {
        const immutIcons = fromJS(newIcons);
        return state.update('icons', (arr) => arr.concat(immutIcons));
      }

      return state;
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
        const location = checkLocation(vx, vy, icon.get('target'), icon.get('home'));

        return icon.set('x', newX).set('y', newY).set('vector', [vx, vy]).set('location', location);
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

    case UPDATE_HOME: {
      return updateMapPoint(state, 'home', getHomeCoords);
    }

    case UPDATE_MAP_TARGETS: {
      return updateMapPoint(state, 'mapTarget', getMapCoords, 'zaun');
    }

    case UPDATE_TARGET: {
      const [id, selected] = action.iconTarget;

      const targetType = selected ? 'mapTarget' : 'home';
      const index = state.get('icons').findIndex((icon) => (icon.get('id') === id));
      const target = state.getIn(['icons', index, targetType]);
      return state.setIn(['icons', index, 'target'], target);
    }
    default:
      return state;
  }
}

export default mapReducer;
