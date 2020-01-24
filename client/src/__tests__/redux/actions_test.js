import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';
import * as actions from '../../redux/actions';
import * as types from '../../redux/actionTypes';
import locationDetailsData from '../../assests/locationDetails.json';
import reviewsData from '../../assests/reviews.json';

const baseUrl = process.env.REACT_APP_SERVER;

describe('Action Creators', () => {
  describe('Setting Current Location', () => {
    it('setCurrentLocation --> should create an action to set the location with a passed index', () => {
      // Arrange
      const arrayIndex = 1;
      const expectedAction = {
        type: types.SET_CURRENT_LOCATION,
        data: arrayIndex,
      };

      // Act
      const result = actions.setCurrentLocation(arrayIndex);

      // Assert
      expect(result).toEqual(expectedAction);
    });
  });

  describe('Application UI', () => {
    it('toggleFilters --> should create an action to toggle filters', () => {
      // Arrange
      const expectedAction = {
        type: types.TOGGLE_FILTERS,
      };

      // Act
      const result = actions.toggleFilters();

      // Assert
      expect(result).toEqual(expectedAction);
    });

    it('togglePickagain --> should create an action to toggle pickAgain', () => {
      // Arrange
      const expectedAction = {
        type: types.TOGGLE_PICKAGAIN,
      };

      // Act
      const result = actions.togglePickagain();

      // Assert
      expect(result).toEqual(expectedAction);
    });
  });

  describe('Location Details', () => {
    it('fetchLocationDetailsRequest --> should create an action to request location details from the api', () => {
      // Arrange
      const expectedAction = {
        type: types.FETCH_LOCATION_DETAILS_REQUEST,
      };

      // Act
      const result = actions.fetchLocationDetailsRequest();

      // Assert
      expect(result).toEqual(expectedAction);
    });

    it(`fetchLocationDetailsSuccess --> should create an action that fetching location details was a success,
    and pass fetched location details data`, () => {
      // Arrange
      const expectedAction = {
        type: types.FETCH_LOCATION_DETAILS_SUCCESS,
        data: locationDetailsData,
      };

      // Act
        const result = actions.fetchLocationDetailsSuccess(locationDetailsData);

      // Assert
      expect(result).toEqual(expectedAction);
    });

    it('fetchLocationDetailsError --> should create an action that fetching location details failed, and pass error', () => {
      // Arrange
      const testError = new Error();
      const expectedAction = {
        type: types.FETCH_LOCATION_DETAILS_FAILURE,
        error: testError
      };

      // Act
      const result = actions.fetchLocationDetailsFailure(testError);

      // Assert
      expect(result).toEqual(expectedAction);
      });
  });

  describe('Reviews', () => {
    it('fetchReviewsRequest --> should create an action to fetch reviews, no parameters', () => {
      // Arrange
      const expectedAction = {
        type: types.FETCH_REVIEWS_REQUEST,
      };

      // Act
      const result = actions.fetchReviewsRequest();

      // Assert
      expect(result).toEqual(expectedAction);
    });

    it(`fetchReviewsSuccess --> should create an action that fetching reviews was a success,
    and pass fetched review data`, () => {
      // Arrange
      const expectedAction = {
        type: types.FETCH_REVIEWS_SUCCESS,
        data: reviewsData
      };

      // Act
      const result = actions.fetchReviewsSuccess(reviewsData);

      // Assert
      expect(result).toEqual(expectedAction);
    });

    it('fetchReviewsFailure --> should create an action that fetching reviews failed, and pass error', () => {
      // Arrange
      const testError = new Error();
      const expectedAction = {
        type: types.FETCH_REVIEWS_FAILURE,
        error: testError,
      };

      // Act
      const result = actions.fetchReviewsFailure(testError);

      // Assert
      expect(result).toEqual(expectedAction);
    });
  });

  describe('Thunks', () => {
    let initialState, locationId, middlewares, mockStore, store;
    
    beforeEach(() => {
      initialState = {};
      locationId = '123';
      middlewares = [thunk];
      mockStore = configureMockStore(middlewares);
      store = mockStore(initialState);
    });

    afterEach(() => nock.cleanAll());

    it('getLocationDetails --> should create an action to request location details from api', () => {
      // Arrange
      const responseData = locationDetailsData;
      const expectedActions = [
        { type: types.FETCH_LOCATION_DETAILS_REQUEST },
        {
          type: types.FETCH_LOCATION_DETAILS_SUCCESS,
          data: responseData,
        },
      ];
      nock(baseUrl)
        .defaultReplyHeaders({ 'access-control-allow-origin': '*' })
        .get(`/locationDetails/${locationId}`)
        .reply(200, responseData);

      // Act & Assert
      return store.dispatch(actions.getLocationDetails(locationId))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('getReviews --> should create an action to request the review from the api', () => {
      // Arrange
      const responseData = reviewsData;
      const expectedActions = [
        {
          type: types.FETCH_REVIEWS_REQUEST,
        },
        {
          type: types.FETCH_REVIEWS_SUCCESS,
          data: responseData,
        },
      ];
      nock(baseUrl)
        .defaultReplyHeaders({ 'access-control-allow-origin': '*' })
        .get(`/reviews/${locationId}`)
        .reply(200, responseData);

      // Act & Assert
      return store.dispatch(actions.getReviews(locationId))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
    });
  });
});
