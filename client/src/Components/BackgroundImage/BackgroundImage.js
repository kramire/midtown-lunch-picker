import React from 'react';
import PropTypes from 'prop-types';
import './BackgroundImage.scss';
import stockImg from '../../assests/images/homescreen.jpg';

function BackgroundImage({ locationPhoto }) {
  const locationImg = (
    <div className="img-container">
      <img src={locationPhoto} className="location-img" alt="Restaurant food and ambience" />
    </div>
  );
  const defaultImg = <img src={stockImg} className="stock-img" alt="Black bean salad" /> ;

  return (
    <>
      {locationPhoto === undefined ? defaultImg : locationImg}
    </>
  );
}

BackgroundImage.propTypes = {
  locationPhoto: PropTypes.string,
};

BackgroundImage.defaultProps = {
  locationPhoto: undefined,
};

export default BackgroundImage;
