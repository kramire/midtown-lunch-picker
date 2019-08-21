import data from '../assests/locations.json';
import * as types from './actionTypes';

const initialState = {
  availableLocations: data.length,
  selectedLocation: null,
  showFilters: false,
  showPickAgain: false,
  locationDetails: {
    isRequesting: false,
    lastUpdated: null,
    address: null,
    phone: null,
    website: null,
    categories: [],
    rating: 0,
    price: null,
    photos: [],
  },
  reviews: {
    isRequesting: false,
    lastUpdated: null,
    rating: 0,
    text: null,
    posted: null,
  },
};

function LunchPickerReducers(state = initialState, action) {
  switch(action.type) {
    case types.SET_LOCATION:
      return {
        ...state,
        selectedLocation: action.data
      }
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
    case types.REQUEST_LOCATION_DETAILS:
      return {
        ...state,
        locationDetails: {
          ...state.locationDetails,
          isRequesting: true
        },
      }
    case types.RECEIVED_LOCATION_DETAILS:
      return {
        ...state,
        locationDetails: {
          ...state.locationDetails,
          isRequesting: false
        },
      }
    default:
      return {
        ...state
      }
  }
}

export default LunchPickerReducers;
