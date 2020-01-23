import * as types from '../actionTypes';

const initialState = {
  isRequesting: false,
  lastUpdated: null,
  address: [],
  phone: null,
  website: null,
  categories: [],
  rating: 0,
  price: null,
  photos: [],
};

function locationDetailsReducer(state = initialState, action) {
  switch(action.type) {
    case types.REQUEST_LOCATION_DETAILS:
      return {
        ...state,
        isRequesting: true
      }
    case types.RECEIVED_LOCATION_DETAILS:
      return {
        ...state,
        isRequesting: false,
        lastUpdated: Date.now(),
      }
    case types.SET_LOCATION_DETAILS:
      return {
        ...state,
        address: action.data.address,
        phone: action.data.phone,
        website: action.data.website,
        categories: action.data.categories,
        rating: action.data.rating,
        price: action.data.price,
        photos: action.data.photos,
      }
    default:
      return {
        ...state,
      };
  };
}

export default locationDetailsReducer;
