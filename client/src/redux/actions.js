import * as types from './actionTypes.js';
const baseUrl = process.env.REACT_APP_SERVER;

// Action to Set Currnet Location
export const setCurrentLocation = data => ({
  type: types.SET_CURRENT_LOCATION,
  data
});

// Actions on Updating UI
export const toggleFilters = () => ({
  type: types.TOGGLE_FILTERS
});

export const togglePickagain = () => ({
  type: types.TOGGLE_PICKAGAIN
});

// Actions on Fetching Location data
export const fetchLocationDetailsRequest = () => ({
  type: types.FETCH_LOCATION_DETAILS_REQUEST
});

export const fetchLocationDetailsSuccess = data => ({
  type: types.FETCH_LOCATION_DETAILS_SUCCESS,
  data,
});

export const fetchLocationDetailsFailure = error => ({
  type: types.FETCH_LOCATION_DETAILS_FAILURE,
  error
});

export const getLocationDetails = locationId => {
  const url = `${baseUrl}/locationDetails/${locationId}`

  return dispatch => {
    dispatch(fetchLocationDetailsRequest());
    return fetch(url)
    .then(res => res.json())
    .then(data => dispatch(fetchLocationDetailsSuccess(data)))
    .catch(error => dispatch(fetchLocationDetailsFailure(error)));
  }
};

// Actions on Fetching Reviews data
export const fetchReviewsRequest = () => ({
  type: types.FETCH_REVIEWS_REQUEST,
});

export const fetchReviewsSuccess = data => ({
  type: types.FETCH_REVIEWS_SUCCESS,
  data
});

export const fetchReviewsFailure = error => ({
  type: types.FETCH_REVIEWS_FAILURE,
  error
});

export const getReviews = locationId => {
  const url = `${baseUrl}/reviews/${locationId}`;
  return dispatch => {
    dispatch(fetchReviewsRequest());
    return fetch(url)
    .then(res => res.json())
    .then(data => dispatch(fetchReviewsSuccess(data)))
    .catch(err => dispatch(fetchReviewsFailure(err)));
  }
};

// Action to dispatch location and review data request
// given the current location
export const selectLocation = location => {
  const locationID = location.yelp_id;
  return dispatch => {
    dispatch(setCurrentLocation(location));
    dispatch(getLocationDetails(locationID))
      .then(() => dispatch(getReviews(locationID)));
  };
}