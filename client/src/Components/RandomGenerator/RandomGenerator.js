import React from 'react';
import './RandomGenerator.scss';
import { useDispatch, useSelector } from 'react-redux';
import locationData from '../../assests/locations.json';
import BackgroundImage from '../BackgroundImage';
import { setLocation, getLocationDetails, getReviews } from '../../redux/actions';

function RandomGenerator() {
  const numOfLocations = locationData.length;
  const randomIndex = Math.floor(Math.random() * numOfLocations);
  const locationPick = locationData[randomIndex];
  const locationID = locationPick.yelp_id;

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setLocation(locationPick));
    dispatch(getLocationDetails(locationID));
    dispatch(getReviews(locationID));
  };

  const location = useSelector(state => state.selectedLocation.name);
  const isFetching = useSelector(state => state.locationDetails.isRequesting);

  return (
    <div className="random-generator">
      <button type="button" onClick={handleClick}>
        {
          location === null ? 'Feed Me!' :
          isFetching === true ? <div className="loader" /> :
          location
        }
      </button>
      <BackgroundImage />
    </div>
  );
}

export default RandomGenerator;
