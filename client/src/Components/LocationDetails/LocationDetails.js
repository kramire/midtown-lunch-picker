import React from 'react';
import PropTypes from 'prop-types';
import data from '../../assests/locationDetails.json';

function LocationDetails() {
  const { location, url, categories, rating, price, photos } = data;
  const phoneNumber = data.display_phone;

  return (
    <div>
      <p>Address: {location.display_address.map(el => <span>{el}</span>)}</p>
      <p>Phone: {phoneNumber}</p>
      <a href={url}>Website</a>
      <p>Style: {categories.map(el => <span>{el.title} </span>)}</p>
      <p>Rating: {rating}</p>
      <p>Price: {price}</p>
      <ul>{photos.map(photo => <li><img src={photo} /></li>)}</ul>
    </div>
  );
}

LocationDetails.propTypes = {
  data: PropTypes.shape({
    location: PropTypes.shape({
      display_address: PropTypes.arrayOf(PropTypes.string),
    }),
    display_phone: PropTypes.string,
    categories: PropTypes.arrayOf(PropTypes.string),
    url: PropTypes.string,
    rating: PropTypes.number,
    price: PropTypes.string,
    photos: PropTypes.arrayOf(PropTypes.string),
  }),
};

LocationDetails.defaultProps = {
  data: {
    location: {
      display_address: '',
    },
    display_phone: '',
    categories: [],
    url: '',
    rating: 0,
    price: '',
    photos: [],
  },
};

export default LocationDetails;
