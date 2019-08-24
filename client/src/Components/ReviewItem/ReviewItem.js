import React from 'react';
import PropTypes from 'prop-types';
import './ReviewItem.scss';

function ReviewItem({ review }) {
  const { rating, text } = review;
  const postDate = new Date(review.time_created);
  const formatedDate = `${postDate.getMonth()}/${postDate.getDay()}/${postDate.getFullYear()}`;
  const starArr = [...Array(Math.floor(rating)).keys()];

  return (
    <li className="review-item">
      <div>{starArr.map(el => <span className="fa fa-star" key={el} />)}</div>
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
    text: '',
    time_created: '',
  },
};

export default ReviewItem;
