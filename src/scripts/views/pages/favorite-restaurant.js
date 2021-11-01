import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';

const FavoriteRestaurant = {
  async render() {
    return `
    <section>
      <no-data-component></no-data-component>
      <restaurant-favorite-list></restaurant-favorite-list>
    </section>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantFavoriteListElement = document.querySelector(
      'restaurant-favorite-list',
    );
    const noDataComponentElement = document.querySelector('no-data-component');
    restaurantFavoriteListElement.restaurants = restaurants;
    if (!restaurants.length) {
      noDataComponentElement.style.display = 'block';
    } else {
      noDataComponentElement.style.display = 'none';
    }
  },
};

export default FavoriteRestaurant;
