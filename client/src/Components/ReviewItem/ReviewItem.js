import React from 'react';
import PropTypes from 'prop-types';
import { StarRating } from '../../Components';
import { formatDate } from '../../assests/utils';
import './ReviewItem.scss';

function ReviewItem({ review }) {
  const { rating, text } = review;
  const postDate = formatDate(review.time_created);

  return (
    <li test-id="review-item" className="review-item">
      <StarRating rating={rating} />
      <p>{text}</p>
      <p>Posted: {postDate}</p>
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
