import reducer from '../../../redux/reducers/locations';
import * as types from '../../../redux/actionTypes';

describe('Reducers - Locations', () => {
  it('SET_CURRENT_LOCATION --> should update state\'s selectedLocation to be the passed location id', () => {
    // Arrange
    const initialState = {
      selectedLocation: {
        yelp_id: '123',
        name: 'My Old Restaurant',
      },
    };
    const newLocation = {
      yelp_id: '456',
      name: 'My New Restaurant',
    };
    const action = {
      type: types.SET_CURRENT_LOCATION,
      data: newLocation,
    };
    const expectedState = { selectedLocation: newLocation };

    // Act
    const newState = reducer(initialState, action);

    // Assert
    expect(newState).toEqual(expectedState);
    expect(initialState).not.toEqual(expectedState);
  });
});
