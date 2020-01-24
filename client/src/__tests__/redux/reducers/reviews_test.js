import reducer from '../../../redux/reducers/reviews';
import * as types from '../../../redux/actionTypes';
import reviewData from '../../../assests/reviews.json';

describe('Reducers - Reviews', () => {
  describe('Reviews', () => {
    it('FETCH_REVIEWS_REQUEST --> should set state\'s reviews isRequesting to true', () => {
      // Arrange
      const initialState = {
        isRequesting: false,
      };
      const action = {
        type: types.FETCH_REVIEWS_REQUEST,
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

    it(`FETCH_REVIEWS_SUCCESS --> should set state's reviews isRequesting to false, 
    update the lastUpdated time, and update the data with the fetch response`, () => {
      // Arrange
      const initialState = {
        isRequesting: true,
        lastUpdated: Date.now(),
        data: [],
      };
      const action = {
        type: types.FETCH_REVIEWS_SUCCESS,
        data: reviewData,
      };
      const expectedState = {
        isRequesting: false,
        lastUpdated: Date.now(),
        data: reviewData,
      };

      // Act
      const newState = reducer(initialState, action);

      // Assert
      expect(newState).toEqual(expectedState);
      expect(initialState).not.toEqual(expectedState);
    });

    it('FETCH_REVIEWS_FAILURE --> should set state\'s reviews isRequesting to false', () => {
      // Arrange
      const initialState = {
        isRequesting: true,
      };
      const action = {
        type: types.FETCH_REVIEWS_FAILURE,
      };
      const expectedState = {
        isRequesting: false,
      };

      // Act
      const newState = reducer(initialState, action);

      // Assert
      expect(newState).toEqual(expectedState);
      expect(initialState).not.toEqual(expectedState);
    });
  });
});
