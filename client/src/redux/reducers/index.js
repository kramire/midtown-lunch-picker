import { combineReducers } from 'redux';
import locationsReducer from './locations';
import locationDetailsReducer from './locationDetails';
import reviewsReducer from './reviews';
import uiReducer from './ui';

const rootReducer = combineReducers({
  locations: locationsReducer,
  locationDetails: locationDetailsReducer,
  reviews: reviewsReducer,
  ui: uiReducer,
});

export default rootReducer;
