import React from 'react';
import './RandomGenerator.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useSpring, animated } from 'react-spring';
import locationData from '../../assests/locations.json';
import BackgroundImage from '../BackgroundImage';
import { selectLocation } from '../../redux/actions';


function RandomGenerator() {
  const numOfLocations = locationData.data.length;
  const randomIndex = Math.floor(Math.random() * numOfLocations);
  const locationPick = locationData.data[randomIndex];

  const dispatch = useDispatch();
  const handleClick = () => dispatch(selectLocation(locationPick));

  const location = useSelector(state => state.locations.selectedLocation.name);
  const isFetching = useSelector(state => state.locationDetails.isRequesting);

  const { x } = useSpring({ from: { x: 0 }, x: isFetching ? 1 : 0, config: { duration: 1000 } });

  const bounce = {
    transform: x
      .interpolate({
        range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
        output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
      })
      .interpolate(x => `scale(${x})`),
  };

  return (
    <div className="random-generator">
      <animated.button type="button" onClick={handleClick} style={bounce}>
        {
          location === null ? 'Feed Me!' :
          isFetching === true ? '?' :
          location
        }
      </animated.button>
      <BackgroundImage />
    </div>
  );
}

export default RandomGenerator;
