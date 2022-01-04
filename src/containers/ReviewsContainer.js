import React, { Component } from "react";
import ReviewInput from "../components/reviews/ReviewInput";
import Reviews from "../components/reviews/Reviews";
import { addReview, deleteReview } from "../actions/reviews";
import { connect } from "react-redux";

class ReviewsContainer extends Component {
  render() {
    return (
      <div>
        <ReviewInput
          restaurantId={this.props.restaurant.id}
          addReview={this.props.addReview}
        />
        <Reviews
        restaurantId={this.props.restaurant.id} 
        reviews={this.props.reviews}
        deleteReview={this.props.deleteReview}
        />
      </div>
    );
  }
}

export default connect(state => ({reviews: state.reviews}), { addReview, deleteReview })(ReviewsContainer);
