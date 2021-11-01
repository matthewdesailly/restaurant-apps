import './restaurant-favorite-item';

class RestaurantFavoriteList extends HTMLElement {
  set restaurants(restaurants) {
    this._restaurants = restaurants;
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="item-list"></div>`;

    this._restaurants.forEach((restaurant) => {
      const restaurantFavoriteItemElement = document.createElement(
        'restaurant-favorite-item',
      );
      restaurantFavoriteItemElement.classList.add('my-8');
      restaurantFavoriteItemElement.restaurant = restaurant;
      document
        .querySelector('.item-list')
        .appendChild(restaurantFavoriteItemElement);
    });
  }
}

customElements.define('restaurant-favorite-list', RestaurantFavoriteList);
