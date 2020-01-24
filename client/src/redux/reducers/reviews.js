import * as types from '../actionTypes';

const initialState = {
  isRequesting: false,
  lastUpdated: null,
  data: [],
};

function reviewsReducer(state = initialState, action) {
  switch(action.type) {
    case types.FETCH_REVIEWS_REQUEST:
      return {
        ...state,
        isRequesting: true,
      };
    case types.FETCH_REVIEWS_SUCCESS:
      return {
        ...state,
        isRequesting: false,
        lastUpdated: Date.now(),
        data: action.data,
      };
    case types.FETCH_REVIEWS_FAILURE:
      return {
        ...state,
        isRequesting: false,
      };
    default:
      return {
        ...state,
      };
  };
}

export default reviewsReducer;
