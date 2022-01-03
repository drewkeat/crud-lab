function addRestaurant(text) {
  return {type: "ADD_RESTAURANT", text}
}

function deleteRestaurant(restaurantId) {
  return {type: "DELETE_RESTAURANT", restaurantId}
}

export { addRestaurant, deleteRestaurant }