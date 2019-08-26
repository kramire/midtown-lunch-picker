import React from 'react';
import './StarRating.scss';

function StarRating({ rating = 0 }) {
  const starArr = [...Array(Math.floor(rating)).keys()];

  return (
    <div test-id="star-rating">{starArr.map(el => <span test-id="star-icon" className="fa fa-star" key={el} />)}</div>
  );
}

export default StarRating;
