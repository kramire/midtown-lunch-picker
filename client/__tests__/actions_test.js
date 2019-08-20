import * as actions from '../src/redux/actions';
import * as types from '../src/redux/actionTypes';

describe('Action Creators', () => {
  describe('Application UI', () => {
    it('setLocation --> should create an action to set the location with a passed index', () => {
      // Set Up
      const arrayIndex = 1;
      const expectedAction = {type: types.SET_LOCATION, data: arrayIndex};

      // Execute
      const result = actions.setLocation(arrayIndex);

      // Assertion
      expect(result).toEqual(expectedAction);
    });

    it('toggleFilters --> should create an action to toggle filters', () => {
      // Set Up
      const expectedAction = {type: types.TOGGLE_FILTERS};

      // Execute
      const result = actions.toggleFilters();

      // Assertion
      expect(result).toEqual(expectedAction);
    });

    it('togglePickagain --> should create an action to toggle pickAgain', () => {
      // Set Up
      const expectedAction = {type: types.TOGGLE_PICKAGAIN};

      // Execute
      const result = actions.togglePickagain();

      // Assertion
      expect(result).toEqual(expectedAction);
    });
  });
})
