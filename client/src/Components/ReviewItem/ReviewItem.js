import React from 'react';
import PropTypes from 'prop-types';

function ReviewItem({ review }) {
  const { rating, text } = review;
  const timeCreated = review.time_created;

  return (
    <li>
      <p>Rating: {rating}</p>
      <p>Review: {text}</p>
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
