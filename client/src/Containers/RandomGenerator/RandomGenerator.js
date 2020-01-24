import React from 'react';
import './RandomGenerator.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useSpring, animated } from 'react-spring';
import locationData from '../../assests/locations.json';
import { BackgroundImage } from '../../Components';
import { selectLocation } from '../../redux/actions';
import { pickRandomLocation } from '../../assests/utils';


function RandomGenerator() {
  const dispatch = useDispatch();
  const randomLocation = pickRandomLocation(locationData);
  const handleClick = () => dispatch(selectLocation(randomLocation));
  
  const locationName = useSelector(state => state.locations.selectedLocation.name);
  const isFetching = useSelector(state => state.locationDetails.isRequesting);
  const locationPhoto = useSelector(state => state.locationDetails.photos[0]);

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
          locationName === null ? 'Feed Me!' :
          isFetching === true ? '?' :
          locationName
        }
      </animated.button>
      <BackgroundImage locationPhoto={locationPhoto} />
    </div>
  );
}

export default RandomGenerator;
