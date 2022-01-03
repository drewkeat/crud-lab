import cuid from 'cuid';
export const cuidFn = cuid;
 
export default function manageRestaurants(state = [], action) {
  switch(action.type) {
    case "ADD_RESTAURANT":
      console.log("Add Restaurant Called")
      let restaurant = {
        id: cuid(),
        text: action.name,
        reviews: []
      }
      return state.concat(restaurant)
    case "REMOVE_RESTAURANT":
      console.log("Remove Restaurant Called")
      return state
    default:
      return state
  }
}
