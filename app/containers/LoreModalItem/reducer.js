/*
 * LoreModalReducer
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
  CLOSE_MODAL,
  OPEN_MODAL,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loreText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet elementum magna. Nullam dignissim pretium bibendum. Mauris ultrices dapibus elit, nec tempus mauris tempor in. Sed dolor mi, elementum ac elementum quis, tincidunt nec odio. Integer eget ultricies nunc. In sed metus ullamcorper, interdum nibh vitae, tincidunt dolor. Aenean pellentesque et dui sed fringilla. In pulvinar tortor quis mauris convallis, nec laoreet metus faucibus. Sed cursus, leo ut tristique mattis, quam libero bibendum urna, pharetra accumsan eros nisl vehicula libero.',
  source: 'https://www.google.com',
  name: 'Dan The Man Jr.',
  title: 'The Real Story',
  display: true,
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case CLOSE_MODAL:
      return state
        .set('display', false);
    case OPEN_MODAL:
      return state
        .set('display', true)
        .set('name', action.id);
    default:
      return state;
  }
}

export default homeReducer;
