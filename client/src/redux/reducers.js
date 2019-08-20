import data from '../assests/locations.json';

const initialState = {
  availableLocations: data.length,
  selectedLocation: null,
  showFilters: false,
  showPickAgain: false,
  locationDetails: {
    isRequesting: false,
    lastUpdate: null,
    address: null,
    phone: null,
    website: null,
    categories: [],
    rating: 0,
    price: null,
    photos: [],
  },
  filters: {
    categories: [],
    isOpen: true,
  },
  reviews: {
    rating: 0,
    text: null,
    posted: null,
  },
};

function LunchPickerReducers(state = initialState, action) {
  switch (action.type) {
    default:
      return {
        ...state
      }
  }
}

export default LunchPickerReducers;
