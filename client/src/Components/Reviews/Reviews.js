import React from 'react';
import { ReviewItem } from '../../Components';
import './Reviews.scss';

function Reviews({ reviews }) {
  return (
    <ul className="reviews">
      {reviews.map(review => <ReviewItem key={review.id} review={review} />)}
    </ul>
  );
}

export default Reviews;
