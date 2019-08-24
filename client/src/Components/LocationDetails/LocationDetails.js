import React from 'react';
import PropTypes from 'prop-types';
import './LocationDetails.scss';

function LocationDetails({ location }) {
  const { address, phone, website, categories, rating, price, photos } = location;
  console.log(rating);
  const starArr = [...Array(Math.floor(rating)).keys()]; 

  return (
    <div className='location-details'>
      <div>
        <div>{starArr.map(el => <span class="fa fa-star"></span>)}</div>
        <p>{price}</p>
      </div>
      <p>{categories.map(el => <span>{el.title}</span>)}</p>
      <div>
        <div>{address.map(el => <div>{el} </div>)}</div>
        <div>{phone}</div>
      </div>
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
