import reducer from '../src/redux/reducers';
import * as types from '../src/redux/actionTypes';

describe('Reducers', () => {
  describe('Application UI', () => {
    it('SET_LOCATION --> should update state\'s selectedLocation to be the passed location id', () => {
      // Set Up
      const newLocationId = '456';
      const action = {
        type: types.SET_LOCATION,
        data: newLocationId,
      };
      const initialState = { selectedLocation: '123' };
      const expectedState = { selectedLocation: newLocationId };

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
});
