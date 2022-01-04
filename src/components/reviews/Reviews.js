import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  buildReviews = () => {
    const reviews = this.props.reviews.filter(review => (review.restaurantId === this.props.restaurantId))
   return reviews.map(review => (
     <Review key={review.id} review={review} deleteReview={this.props.deleteReview} />
   ))
  }

  render() {
    return (
      <ul>
        Reviews
        {this.buildReviews()}
      </ul>
    );
  }
};

export default Reviews;