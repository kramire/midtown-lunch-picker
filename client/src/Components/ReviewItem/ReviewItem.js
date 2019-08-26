import React from 'react';
import PropTypes from 'prop-types';
import { StarRating } from '../../Components';
import './ReviewItem.scss';

function ReviewItem({ review }) {
  const { rating, text } = review;
  const postDate = new Date(review.time_created);
  const formatedDate = `${postDate.getMonth()}/${postDate.getDay()}/${postDate.getFullYear()}`;

  return (
    <li test-id="review-item" className="review-item">
      <StarRating rating={rating} />
      <p>{text}</p>
      <p>Posted: {formatedDate}</p>
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
    text: 'Error loading review',
    time_created: '',
  },
};

export default ReviewItem;
