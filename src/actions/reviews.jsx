function addReview(restaurantId, text){
  return {type: "ADD_REVIEW", restaurantId, text}
}

function deleteReview(reviewId){
  return {type: "DELETE_REVIEW", reviewId}
}

export { addReview, deleteReview }