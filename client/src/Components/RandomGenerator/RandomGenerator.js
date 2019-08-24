import React from 'react';
import './RandomGenerator.scss';
import stockImg from '../../assests/images/homescreen.jpg';
import locationData from '../../assests/locations.json';
import { useDispatch, useSelector } from 'react-redux';
import { setLocation, getLocationDetails, getReviews } from '../../redux/actions';

function RandomGenerator() {
  const numOfLocations = locationData.length;
  const randomIndex = Math.floor(Math.random() * numOfLocations);
  const randomLocationPick = locationData[randomIndex];
  const randomLocationID = randomLocationPick.yelp_id;

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setLocation(randomLocationPick));
    dispatch(getLocationDetails(randomLocationID));
    dispatch(getReviews(randomLocationID));
  };
  
  const location = useSelector(state => state.selectedLocation.name);
  const locationImg = useSelector(state => state.locationDetails.photos[0]);
  
  return (
    <div className={'random-generator'}>
      <button type="button" onClick={handleClick}>
        {location !== null ? location : 'Feed Me!'}
        {location !== null && <p>Pick Again?</p>}
      </button>
      {location === null ?
        <img src={stockImg} className='stock-img' /> :
        <div className='img-container'>
          <img src={locationImg} className='location-img' />
        </div>
      }
    </div>
  );
}

export default RandomGenerator;
