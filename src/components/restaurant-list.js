import './restaurant-item';

class RestaurantList extends HTMLElement {
  set restaurants(restaurants) {
    this._restaurants = restaurants;
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="item-list"></div>`;

    this._restaurants.forEach((restaurant) => {
      const restaurantItemElement = document.createElement('restaurant-item');
      restaurantItemElement.restaurant = restaurant;
      document.querySelector('.item-list').appendChild(restaurantItemElement);
    });
  }
}

customElements.define('restaurant-list', RestaurantList);
