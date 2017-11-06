/*
 * MapItemConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const CREATE_ICONS = 'lol_map/Map/CREATE_ICONS';
export const START_ICONS = 'lol_map/Map/START_ICONS';
export const STOP_ICONS = 'lol_map/Map/STOP_ICONS';
export const MOVE_ICONS = 'lol_map/Map/MOVE_ICONS';
export const UPDATE_DIMS = 'lol_map/Map/UPDATE_DIMS';
export const UPDATE_HOME = 'lol_map/Map/UPDATE_HOME';
export const UPDATE_TARGET = 'lol_map/Map/UPDATE_TARGET';
