import React from 'react';
import PropTypes from 'prop-types';

function LocationDetails({ location }) {
  const { address, phone, website, categories, rating, price, photos } = location;

  return (
    <div>
      <p>Address: {address.map(el => <span>{el} </span>)}</p>
      <p>Phone: {phone}</p>
      <a href={website}>Website</a>
      <p>Style: {categories.map(el => <span>{el.title} </span>)}</p>
      <p>Rating: {rating}</p>
      <p>Price: {price}</p>
      <ul>{photos.map(photo => <li><img src={photo} /></li>)}</ul>
    </div>
  );
}

LocationDetails.propTypes = {
  location: PropTypes.shape({
    address: PropTypes.arrayOf(PropTypes.string),
    phone: PropTypes.string,
    website: PropTypes.string,
    categories: PropTypes.arrayOf(PropTypes.string),
    rating: PropTypes.number,
    price: PropTypes.string,
    photos: PropTypes.arrayOf(PropTypes.string),
  }),
};

LocationDetails.defaultProps = {
  location: {
    address: [],
    display_phone: '',
    categories: [],
    url: '',
    rating: 0,
    price: '',
    photos: [],
  },
};

export default LocationDetails;
