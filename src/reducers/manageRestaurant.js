import cuid from 'cuid';
export const cuidFn = cuid;
 
export default function manageRestaurants(state = {
  restaurants:[],
  reviews: []
}, action) {
  switch(action.type) {
    case "ADD_RESTAURANT":
      let restaurant = {
        id: cuid(),
        text: action.text
      }
      return {...state, restaurants: [...state.restaurants, restaurant]}
    case "DELETE_RESTAURANT":
      return {...state, restaurants: state.restaurants.filter(rest => rest.id !== action.restaurantId)}
    case "ADD_REVIEW":
      let review = {
        restaurantId: action.restaurantId,
        text: action.text,
        id: cuid()
      }
      return {...state, reviews: [...state.reviews, review]}
    case "DELETE_REVIEW":
      return {...state, reviews: [...state.reviews.filter(review => review.id !== action.reviewId)]}
    default:
      return state
  }
}
