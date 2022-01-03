import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {

  render() {
    const {restaurants, deleteRestaurant} = this.props
    const buildRestaurants = restaurants.map(restaurant => (
          <Restaurant 
          key={restaurant.id} 
          restaurant={restaurant} 
          deleteRestaurant={deleteRestaurant}/>
        )
      )

    return(
      <ul>
        Restaurants Component
        {buildRestaurants}
      </ul>
    );
  }
};

export default Restaurants;