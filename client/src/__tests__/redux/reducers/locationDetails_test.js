import reducer from '../../../redux/reducers/locationDetails';
import * as types from '../../../redux/actionTypes';
import locationData from '../../../assests/locationDetails.json';

describe('Reducers - Location Details', () => {
  it('FETCH_LOCATION_DETAILS_REQUEST --> should set the state\'s locationDetails isRequesting to true', () => {
    // Arrange
    const initialState = {
      isRequesting: false,
    };
    const action = {
      type: types.FETCH_LOCATION_DETAILS_REQUEST,
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

  it(`FETCH_LOCATION_DETAILS_SUCCESS --> should set the state's locationDetails isRequesting to false,
  updates the lastUpdated time, and sets the location data`, () => {
    // Arrange
    const initialState = {
      isRequesting: true,
      lastUpdated: Date.now(),
    };
    const action = {
      type: types.FETCH_LOCATION_DETAILS_SUCCESS,
      data: locationData,
    };
    const expectedState = {
      isRequesting: false,
      lastUpdated: Date.now(),
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

  it('FETCH_LOCATION_DETAILS_FAILURE --> should set the state\'s locationDetails isRequesting to false', () => {
    // Arrange
    const initialState = {
      isRequesting: true,
    };
    const action = {
      type: types.FETCH_LOCATION_DETAILS_FAILURE,
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
