import * as types from '../actionTypes';

const initialState = {
  isRequesting: false,
  lastUpdated: null,
  data: [],
};

function reviewsReducer(state = initialState, action) {
  switch(action.type) {
    case types.REQUEST_REVIEWS:
      return {
        ...state,
        isRequesting: true,
      };
    case types.RECEIVED_REVIEWS:
      return {
        ...state,
        isRequesting: false,
        lastUpdated: Date.now(),
      }
    case types.SET_REVIEWS:
      return {
        ...state,
        data: action.data,
      }
    default:
      return {
        ...state,
      };
  };
}

export default reviewsReducer;
