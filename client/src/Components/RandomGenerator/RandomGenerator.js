import React from 'react';
import locationData from '../../assests/locations.json';
import { useDispatch, useSelector } from 'react-redux';
import { setLocation, getLocationDetails } from '../../redux/actions';

function RandomGenerator() {
  const numOfLocations = locationData.length;
  const randomIndex = Math.floor(Math.random() * numOfLocations);
  const randomLocationPick = locationData[randomIndex];

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setLocation(randomLocationPick));
    dispatch(getLocationDetails(randomLocationPick.yelp_id));
  };
  
  const selectedLocation = useSelector(state => state.selectedLocation.name);
  
  return (
    <div>
      <button type="button" onClick={handleClick}>
        {selectedLocation !== null ? selectedLocation : 'Feed Me'}
        <p>Click to Pick Again</p>
      </button>
      <button type="button">Picky Eater?</button>
    </div>
  );
}

export default RandomGenerator;
