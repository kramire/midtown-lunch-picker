import reducer from '../../../redux/reducers/locationDetails';
import * as types from '../../../redux/actionTypes';
import locationData from '../../../assests/locationDetails.json';

describe('Reducers - Location Details', () => {
  it('REQUEST_LOCATION_DETAILS --> should set the state\'s locationDetails.isRequesting to true', () => {
    // Arrange
    const initialState = {
      isRequesting: false,
    };
    const action = {
      type: types.REQUEST_LOCATION_DETAILS,
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

  it('RECEIVED_LOCATION_DETAILS --> should set the state\'s locationDetails.isRequesting to false', () => {
    // Arrange
    const initialState = {
      isRequesting: true,
      lastUpdated: Date.now(),
    };
    const action = {
      type: types.RECEIVED_LOCATION_DETAILS,
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

  it('SET_LOCATION_DETAILS --> should set the properties for the location given the passed data', () => {
    // Arrange
    const initialState = {};
    const action = {
      type: types.SET_LOCATION_DETAILS,
      data: locationData,
    };
    const expectedState = {
      address: locationData.address,
      phone: locationData.phone,
      website: locationData.website,
      categories: locationData.categories,
      rating: locationData.rating,
      price: locationData.price,
      photos: locationData.photos,
    };

    // Act
    const newState = reducer(initialState, action);

    // Assert
    expect(newState).toEqual(expectedState);
    expect(initialState).not.toEqual(expectedState);
  });
});
