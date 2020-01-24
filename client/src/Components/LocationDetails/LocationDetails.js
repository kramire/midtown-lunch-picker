import React from 'react';
import PropTypes from 'prop-types';
import { StarRating } from '../../Components';
import './LocationDetails.scss';

function LocationDetails({ location }) {
  const { address, phone, categories, rating, price, photos } = location;

  return (
    <div className="location-details">
      <div className="icons">
        <StarRating rating={rating} />
        <p>{price}</p>
      </div>
      <div className="categories">
        {categories.map(category => <span key={category.title}>{category.title}</span>)}
      </div>
      <div className="contact-info">
        <div>
          {address.map(line =><div key={line}>{line} </div>)}
        </div>
        <div>{phone}</div>
      </div>
      <ul className="review-list">
        {photos.map((photo, i) => <li key={i}><img src={photo} alt="Restaurant food and ambience" /></li>)}
      </ul>
    </div>
  );
}

LocationDetails.propTypes = {
  location: PropTypes.shape({
    address: PropTypes.arrayOf(PropTypes.string),
    phone: PropTypes.string,
    website: PropTypes.string,
    categories: PropTypes.arrayOf(PropTypes.shape({
      alias: PropTypes.string,
      name: PropTypes.string,
    })),
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
