import reducer from '../../../redux/reducers/reviews';
import * as types from '../../../redux/actionTypes';
import reviewData from '../../../assests/reviews.json';

describe('Reducers - Reviews', () => {
  describe('Reviews', () => {
    it('REQUEST_REVIEWS --> should set state\'s reviews.isRequesting to true', () => {
      // Arrange
      const initialState = {
        isRequesting: false,
      };
      const action = {
        type: types.REQUEST_REVIEWS,
      };
      const expectedState = {
        isRequesting: true,
      };

      // Act
      const newState = reducer(initialState, action);

      // Assert
      expect(newState).toEqual(expectedState);
      expect(initialState).not.toEqual(expectedState);
    });

    it('RECEIVED_REVIEWS --> should set state\'s reviews.isRequesting to false, and updates lastUpdated', () => {
      // Arrange
      const initialState = {
        isRequesting: true,
        lastUpdated: Date.now(),
      };
      const action = {
        type: types.RECEIVED_REVIEWS,
      };
      const expectedState = {
        isRequesting: false,
        lastUpdated: Date.now(),
      };

      // Act
      const newState = reducer(initialState, action);

      // Assert
      expect(newState).toEqual(expectedState);
      expect(initialState).not.toEqual(expectedState);
    });

    it('SET_REVIEWS --> should set the state\'s review data given the passed object', () => {
      // Arrange
      const initialState = {};
      const action = {
        type: types.SET_REVIEWS,
        data: reviewData,
      };
      const expectedState = {
        data: reviewData,
      };

      // Act
      const newState = reducer(initialState, action);

      // Assert
      expect(newState).toEqual(expectedState);
      expect(initialState).not.toEqual(expectedState);
    });
  });
});