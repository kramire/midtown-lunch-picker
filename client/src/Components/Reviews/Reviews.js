import React, { useRef } from 'react';
import { ReviewItem } from '../../Components';
import './Reviews.scss';

function Reviews({ reviews = [] }) {
  const scrollToRef = ref => window.scrollTo({
    top: ref.current.offsetTop,
    left: 0,
    behavior: 'smooth',
  });
  const reviewsRef = useRef(null);

  return (
    <div test-id="reviews" className="reviews">
      <h2 onClick={() => scrollToRef(reviewsRef)}>Reviews</h2>
      <ul ref={reviewsRef}>
        {reviews.map(review => <ReviewItem key={review.id} review={review} />)}
      </ul>
    </div>
  );
}

export default Reviews;
