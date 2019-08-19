import React from 'react';
import { ReviewItem } from '..';
import data from '../../assests/reviews.json';

function Reviews() {
  const { reviews } = data;
  return (
    <ul>
      {reviews.map(review => <ReviewItem key={review.id} review={review} />)}
    </ul>
  );
}

export default Reviews;
