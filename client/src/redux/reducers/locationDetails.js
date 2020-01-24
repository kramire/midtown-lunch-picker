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
    case types.FETCH_LOCATION_DETAILS_REQUEST:
      return {
        ...state,
        isRequesting: true
      }
    case types.FETCH_LOCATION_DETAILS_SUCCESS:
      return {
        ...state,
        isRequesting: false,
        lastUpdated: Date.now(),
        address: action.data.address,
        phone: action.data.phone,
        website: action.data.website,
        categories: action.data.categories,
        rating: action.data.rating,
        price: action.data.price,
        photos: action.data.photos,
      }
    case types.FETCH_LOCATION_DETAILS_FAILURE:
      return {
        ...state,
        isRequesting: false,
      }
    default:
      return {
        ...state,
      };
  };
}

export default locationDetailsReducer;
