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
        text: action.text,
        reviews: []
      }
      return {...state, restaurants: [...state.restaurants, restaurant]}
    case "DELETE_RESTAURANT":
      return {...state, restaurants: state.restaurants.filter(rest => rest.id != action.restaurantId)}
    default:
      return state
  }
}
