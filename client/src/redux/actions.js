import * as types from './actionTypes.js';
const baseUrl = process.env.REACT_APP_YELP_API;
const bearer = `Bearer ${process.env.REACT_APP_YELP_TOKEN}`;

export const setLocation = data => ({
  type: types.SET_LOCATION,
  data
});

export const toggleFilters = () => ({
  type: types.TOGGLE_FILTERS
});

export const togglePickagain = () => ({
  type: types.TOGGLE_PICKAGAIN
});

export const requestLocationDetails = () => ({
  type: types.REQUEST_LOCATION_DETAILS
});

export const receivedLocationDetails = () => ({
  type: types.RECEIVED_LOCATION_DETAILS
});

export const setLocationDetails = data => ({
  type: types.SET_LOCATION_DETAILS,
  data
});

export const getLocationDetails = locationId => {
  const url = `${baseUrl}/businesses/${locationId}`

  return dispatch => {
    dispatch(requestLocationDetails());
    return fetch(url, {
      headers: {
        'authorization': bearer,
      }
    })
    .then(res => res.json())
    .then(data => dispatch(setLocationDetails(data)))
    .then(() => dispatch(receivedLocationDetails()))
  }
};

export const requestReviews = () => ({
  type: types.REQUEST_REVIEWS,
});

export const receivedReviews = () => ({
  type: types.RECEIVED_REVIEWS,
});

export const setReviews = data => ({
  type: types.SET_REVIEWS,
  data
});

export const getReviews = locationId => {
  const url = `${baseUrl}/businesses/${locationId}/reviews`;

  return dispatch => {
    dispatch(requestReviews());
    return fetch(url, {
      headers: {
        authorization: bearer,
      }
    })
    .then(res => res.json())
    .then(data => dispatch(setReviews(data)))
    .then(() => dispatch(receivedReviews()));
  }
};