import data from '../../assests/locations.json';
import * as types from '../actionTypes';

const initialState = {
  availableLocations: data.length,
  selectedLocation: {
    yelp_id: null,
    name: null,
  },
};

function locationsReducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_LOCATION:
      return {
        ...state,
        selectedLocation: {
          ...state.selectedLocation,
          yelp_id: action.data.yelp_id,
          name: action.data.name,
        }
      };
    default:
      return {
        ...state
      }
  }
}

export default locationsReducer;
