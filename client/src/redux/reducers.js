import data from '../assests/locations.json';
import * as types from './actionTypes';

const initialState = {
  availableLocations: data.length,
  selectedLocation: {
    yelp_id: null,
    name: null,
  },
  showFilters: false,
  showPickAgain: false,
  locationDetails: {
    isRequesting: false,
    lastUpdated: null,
    address: [],
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
        selectedLocation: {
          ...state.selectedLocation,
          yelp_id: action.data.yelp_id,
          name: action.data.name,
        }
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
        locationDetails: {
          ...state.location,
          address: action.data.address,
          phone: action.data.phone,
          website: action.data.website,
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
