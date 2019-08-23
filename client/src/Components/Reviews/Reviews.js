import React from 'react';
import { ReviewItem } from '..';

function Reviews({ reviews }) {
  return (
    <ul>
      {reviews.map(review => <ReviewItem key={review.id} review={review} />)}
    </ul>
  );
}

export default Reviews;
