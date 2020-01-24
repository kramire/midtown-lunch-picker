import reducer from '../../../redux/reducers/ui';
import * as types from '../../../redux/actionTypes';

describe('Reducers - UI', () => {
  it('TOGGLE_FILTERS --> should set state\'s showFilters to the opposite of the current state\'s value', () => {
    // Arrange
    const initialState = { showFilters: false };
    const action = {
      type: types.TOGGLE_FILTERS,
    };
    const expectedState = { showFilters: true };

    // Act
    const newState = reducer(initialState, action);

    // Assert
    expect(newState).toEqual(expectedState);
    expect(initialState).not.toEqual(expectedState);
  });

  it('TOGGLE_PICKAGAIN --> should set state\'s showPickAgain to the opposite of the current state\'s value', () => {
    // Arrange
    const initialState = { showPickAgain: false };
    const action = {
      type: types.TOGGLE_PICKAGAIN,
    };
    const expectedState = { showPickAgain: true };

    // Act
    const newState = reducer(initialState, action);

    // Assert
    expect(newState).toEqual(expectedState);
    expect(initialState).not.toEqual(expectedState);
  });
});
