import * as types from './actionTypes.js';

export const setLocation = data => ({
  type: types.SET_LOCATION,
  data
});

export const toggleFilters = () => ({
  type: types.TOGGLE_FILTERS
});

export const togglePickagain = () => ({
  type: types.TOGGLE_PICKAGAIN
});