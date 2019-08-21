import * as actions from '../src/redux/actions';
import * as types from '../src/redux/actionTypes';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import fetch from 'isomorphic-fetch';
import locationDetailsData from '../src/assests/locationDetails.json';

const bearer = `Bearer ${process.env.REACT_APP_YELP_TOKEN}`;

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
    it('requestLocationDetails --> should create an action to toggle location isRequesting', () => {
      // Set Up
      const expectedAction = {
        type: types.REQUEST_LOCATION_DETAILS,
      };

      // Execute
      const result = actions.requestLocationDetails();

      // Assertion
      expect(result).toEqual(expectedAction);
    });

    it('receiveLocationDetails --> should create an action to toggle location isRequesting', () => {
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
    })

    it('getLocationDetails --> should create an action to request location details from api', () => {
      // Set Up
      const initialState = { locationDetails: {} }
      const locationId = '123';
      
      const middlewares = [thunk];
      const mockStore = configureMockStore(middlewares);
      const store = mockStore(initialState);
      
      const responseData = locationDetailsData;
      const expectedActions = [
        { type: types.REQUEST_LOCATION_DETAILS },
        { 
          type: types.SET_LOCATION_DETAILS,
          data: responseData
        },
        { type: types.RECEIVED_LOCATION_DETAILS },
      ];

      nock(process.env.REACT_APP_YELP_API, {
        reqheaders: { 'authorization': bearer }
      })
      .get(`/businesses/${locationId}`)
      .reply(200, responseData);

      // Execute & Assertion
      return store.dispatch(actions.getLocationDetails(locationId))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
    })
  })
});
