import fetch from 'isomorphic-fetch';
import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';
import * as actions from '../redux/actions';
import * as types from '../redux/actionTypes';
import locationDetailsData from '../assests/locationDetails.json';
import reviewsData from '../assests/reviews.json';

const baseUrl = process.env.REACT_APP_SERVER;

describe('Action Creators', () => {
  afterEach(() => nock.cleanAll());

  describe('Application UI', () => {
    it('setLocation --> should create an action to set the location with a passed index', () => {
      // Set Up
      const arrayIndex = 1;
      const expectedAction = {
        type: types.SET_LOCATION,
        data: arrayIndex,
      };

      // Execute
      const result = actions.setLocation(arrayIndex);

      // Assertion
      expect(result).toEqual(expectedAction);
    });

    it('toggleFilters --> should create an action to toggle filters', () => {
      // Set Up
      const expectedAction = {
        type: types.TOGGLE_FILTERS,
      };

      // Execute
      const result = actions.toggleFilters();

      // Assertion
      expect(result).toEqual(expectedAction);
    });

    it('togglePickagain --> should create an action to toggle pickAgain', () => {
      // Set Up
      const expectedAction = {
        type: types.TOGGLE_PICKAGAIN,
      };

      // Execute
      const result = actions.togglePickagain();

      // Assertion
      expect(result).toEqual(expectedAction);
    });
  });

  describe('Location Details', () => {
    it('requestLocationDetails --> should create an action to set location isRequesting to true', () => {
      // Set Up
      const expectedAction = {
        type: types.REQUEST_LOCATION_DETAILS,
      };

      // Execute
      const result = actions.requestLocationDetails();

      // Assertion
      expect(result).toEqual(expectedAction);
    });

    it('receiveLocationDetails --> should create an action to set location isRequesting to false', () => {
      // Set Up
      const expectedAction = {
        type: types.RECEIVED_LOCATION_DETAILS,
      };

      // Execute
      const result = actions.receivedLocationDetails();

      // Assertion
      expect(result).toEqual(expectedAction);
    });

    it('setLocationDetails --> should create an action to set the location details with passed object', () => {
      // Set Up
      const expectedAction = {
        type: types.SET_LOCATION_DETAILS,
        data: locationDetailsData,
      };

      // Execute
      const result = actions.setLocationDetails(locationDetailsData);

      // Assert
      expect(result).toEqual(expectedAction);
    });

    it('getLocationDetails --> should create an action to request location details from api', () => {
      // Set Up
      const initialState = { locationDetails: {} };
      const locationId = '123';
      const middlewares = [thunk];
      const mockStore = configureMockStore(middlewares);
      const store = mockStore(initialState);
      const responseData = locationDetailsData;
      const expectedActions = [
        { type: types.REQUEST_LOCATION_DETAILS },
        {
          type: types.SET_LOCATION_DETAILS,
          data: responseData,
        },
        { type: types.RECEIVED_LOCATION_DETAILS },
      ];

      nock(baseUrl)
        .defaultReplyHeaders({ 'access-control-allow-origin': '*' })
        .get(`/locationDetails/${locationId}`)
        .reply(200, responseData);

      // Execute & Assertion
      return store.dispatch(actions.getLocationDetails(locationId))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
    });
  });

  describe('Reviews', () => {
    it('requestReviews --> should create an action to set reviews isRequesting to true', () => {
      // Set Up
      const expectedAction = {
        type: types.REQUEST_REVIEWS,
      };

      // Execute
      const result = actions.requestReviews();

      // Assertion
      expect(result).toEqual(expectedAction);
    });

    it('receiveReviews --> should create an action to set reviews isRequesting to false', () => {
      // Set Up
      const expectedAction = {
        type: types.RECEIVED_REVIEWS,
      };

      // Execute
      const result = actions.receivedReviews();

      // Assertion
      expect(result).toEqual(expectedAction);
    });

    it('setReviews --> should create an action to set reviews with passed object', () => {
      // Set Up
      const expectedAction = {
        type: types.SET_REVIEWS,
        data: reviewsData,
      };

      // Execute
      const result = actions.setReviews(reviewsData);

      // Assertion
      expect(result).toEqual(expectedAction);
    });

    it('getReviews --> should create an action to request the review from the api', () => {
      // Set Up
      const initialState = { reviews: {} };
      const locationId = '123';
      const responseData = reviewsData;
      const middlewares = [thunk];
      const mockStore = configureMockStore(middlewares);
      const store = mockStore(initialState);
      const expectedActions = [
        {
          type: types.REQUEST_REVIEWS,
        },
        {
          type: types.SET_REVIEWS,
          data: responseData,
        },
        {
          type: types.RECEIVED_REVIEWS,
        },
      ];

      nock(baseUrl)
        .defaultReplyHeaders({ 'access-control-allow-origin': '*' })
        .get(`/reviews/${locationId}`)
        .reply(200, responseData);

      // Execute & Assertion
      return store.dispatch(actions.getReviews(locationId))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
    });
  });
});
