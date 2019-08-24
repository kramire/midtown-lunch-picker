import React from 'react';
import './BackgroundImage.scss';
import { useSelector } from 'react-redux';
import stockImg from '../../assests/images/homescreen.jpg';

function BackgroundImage() {
  const locationImg = useSelector(state => state.locationDetails.photos[0]);

  return (
    <>
      {
        locationImg === undefined ?
          <img src={stockImg} className="stock-img" alt="Black bean salad" /> :
          <div className="img-container">
            <img src={locationImg} className="location-img" alt="Restaurant food and ambience" />
          </div>
      }
    </>
  );
}

export default BackgroundImage;
