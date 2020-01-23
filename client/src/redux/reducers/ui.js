import * as types from '../actionTypes';

const initialState = {
  showFilters: false,
  showPickAgain: false,
};

function uiReducer(state = initialState, action) {
  switch(action.type) {
    case types.TOGGLE_FILTERS:
      return {
        ...state,
        showFilters: !state.showFilters
      }
    case types.TOGGLE_PICKAGAIN:
      return {
        ...state,
        showPickAgain: !state.showPickAgain
      }
    default:
      return {
        ...state
      };
  }
}

export default uiReducer;
