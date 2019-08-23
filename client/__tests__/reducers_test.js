import reducer from '../src/redux/reducers';
import * as types from '../src/redux/actionTypes';
import locationData from '../src/assests/locationDetails.json';
import reviewData from '../src/assests/reviews.json';

describe('Reducers', () => {
  describe('Application UI', () => {
    it('SET_LOCATION --> should update state\'s selectedLocation to be the passed location id', () => {
      // Set Up
      const newLocation = {
        yelp_id: '456',
        name: 'My Restaurant',
      };
      const action = {
        type: types.SET_LOCATION,
        data: newLocation,
      };
      const initialState = { 
        selectedLocation: {
          yelp_id: '123',
          name: 'My Old Restaurant',
        }
      };
      const expectedState = { selectedLocation: newLocation };

      // Execute
      const newState = reducer(initialState, action);

      // Assertion
      expect(newState).toEqual(expectedState);
      expect(initialState).not.toEqual(expectedState);
    });

    it('TOGGLE_FILTERS --> should set state\'s showFilters to the opposite of the current state\'s value', () => {
      // Set Up
      const action = {
        type: types.TOGGLE_FILTERS,
      };
      const initialState = { showFilters: false };
      const expectedState = { showFilters: true };

      // Execute
      const newState = reducer(initialState, action);

      // Assertion
      expect(newState).toEqual(expectedState);
      expect(initialState).not.toEqual(expectedState);
    });

    it('TOGGLE_PICKAGAIN --> should set state\'s showPickAgain to the opposite of the current state\'s value', () => {
      // Set Up
      const action = {
        type: types.TOGGLE_PICKAGAIN,
      };
      const initialState = { showPickAgain: false };
      const expectedState = { showPickAgain: true };

      // Execute
      const newState = reducer(initialState, action);

      // Assertion
      expect(newState).toEqual(expectedState);
      expect(initialState).not.toEqual(expectedState);
    });
  });

  describe('Location Details', () => {
    it('REQUEST_LOCATION_DETAILS --> should set the state\'s locationDetails.isRequesting to true', () => {
      // Set Up
      const action = {
        type: types.REQUEST_LOCATION_DETAILS,
      };
      const initialState = {
        locationDetails: {
          isRequesting: false,
        },
      };
      const expectedState = {
        locationDetails: {
          isRequesting: true,
        },
      };

      // Execute
      const newState = reducer(initialState, action);

      // Assertion
      expect(newState).toEqual(expectedState);
      expect(initialState).not.toEqual(expectedState);
    });

    it('RECEIVED_LOCATION_DETAILS --> should set the state\'s locationDetails.isRequesting to false', () => {
      // Set Up
      const action = {
        type: types.RECEIVED_LOCATION_DETAILS,
      };
      const initialState = {
        locationDetails: {
          isRequesting: true,
          lastUpdated: Date.now(),
        },
      };
      const expectedState = {
        locationDetails: {
          isRequesting: false,
          lastUpdated: Date.now(),
        },
      };

      // Execute
      const newState = reducer(initialState, action);

      // Assertion
      expect(newState).toEqual(expectedState);
      expect(initialState).not.toEqual(expectedState);
    });

    it('SET_LOCATION_DETAILS --> should set the properties for the location given the passed data', () => {
      // Set Up
      const action = {
        type: types.SET_LOCATION_DETAILS,
        data: locationData,
      };
      const initialState = {
        locationDetails: {},
      };
      const expectedState = {
        locationDetails: {
          address: locationData.address,
          phone: locationData.phone,
          website: locationData.website,
          categories: locationData.categories,
          rating: locationData.rating,
          price: locationData.price,
          photos: locationData.photos,
        },
      };

      // Execute
      const newState = reducer(initialState, action);

      // Assertion
      expect(newState).toEqual(expectedState);
      expect(initialState).not.toEqual(expectedState);
    });
  });

  describe('Reviews', () => {
    it('REQUEST_REVIEWS --> should set state\'s reviews.isRequesting to true', () => {
      // Set Up
      const action = {
        type: types.REQUEST_REVIEWS,
      };
      const initialState = {
        reviews: {
          isRequesting: false,
        },
      };
      const expectedState = {
        reviews: {
          isRequesting: true,
        },
      };

      // Execute
      const newState = reducer(initialState, action);

      // Assertion
      expect(newState).toEqual(expectedState);
      expect(initialState).not.toEqual(expectedState);
    });

    it('RECEIVED_REVIEWS --> should set state\'s reviews.isRequesting to false, and updates lastUpdated', () => {
      // Set Up
      const action = {
        type: types.RECEIVED_REVIEWS,
      };
      const initialState = {
        reviews: {
          isRequesting: true,
          lastUpdated: Date.now(),
        },
      };
      const expectedState = {
        reviews: {
          isRequesting: false,
          lastUpdated: Date.now(),
        },
      };

      // Execute
      const newState = reducer(initialState, action);

      // Assertion
      expect(newState).toEqual(expectedState);
      expect(initialState).not.toEqual(expectedState);
    });

    it('SET_REVIEWS --> should set the state\'s review data given the passed object', () => {
      // Set Up
      const action = {
        type: types.SET_REVIEWS,
        data: reviewData,
      };
      const initialState = {
        reviews: {},
      };
      const expectedState = {
        reviews: {
          data: reviewData,
        },
      };

      // Execute
      const newState = reducer(initialState, action);

      // Assertion
      expect(newState).toEqual(expectedState);
      expect(initialState).not.toEqual(expectedState);
    });
  });
});
