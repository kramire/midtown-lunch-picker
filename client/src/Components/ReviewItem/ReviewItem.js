import React from 'react';
import PropTypes from 'prop-types';
import './ReviewItem.scss';

function ReviewItem({ review }) {
  const { rating, text } = review;
  const timeCreated = review.time_created;
  const starArr = [...Array(Math.floor(rating)).keys()]; 

  return (
    <li className='review-item'>
      <div>{starArr.map(el => <span class="fa fa-star"></span>)}</div>
      <p>{text}</p>
      <p>Posted: {timeCreated}</p>
    </li>
  );
}

ReviewItem.propTypes = {
  review: PropTypes.shape({
    rating: PropTypes.number,
    text: PropTypes.string,
    time_created: PropTypes.string,
  }),
};

ReviewItem.defaultProps = {
  review: {
    rating: 0,
    text: '',
    time_created: '',
  },
};

export default ReviewItem;
