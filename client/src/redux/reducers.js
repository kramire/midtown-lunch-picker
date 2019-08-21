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
    data: [],
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
          isRequesting: false,
          lastUpdated: Date.now(),
        },
      }
    case types.SET_LOCATION_DETAILS:
      return {
        ...state,
        location: {
          ...state.location,
          address: action.data.location['display_address'],
          phone: action.data['display_phone'],
          website: action.data.url,
          categories: action.data.categories,
          rating: action.data.rating,
          price: action.data.price,
          photos: action.data.photos,
        },
      }
    case types.REQUEST_REVIEWS:
      return {
        ...state,
        reviews: {
          ...state.reviews,
          isRequesting: true,
        },
      }
    case types.RECEIVED_REVIEWS:
      return {
        ...state,
        reviews: {
          ...state.reviews,
          isRequesting: false,
          lastUpdated: Date.now(),
        },
      }
    case types.SET_REVIEWS:
      return {
        ...state,
        reviews: {
          ...state.reviews,
          data: action.data,
        },
      }
    default:
      return {
        ...state
      }
  }
}

export default LunchPickerReducers;
