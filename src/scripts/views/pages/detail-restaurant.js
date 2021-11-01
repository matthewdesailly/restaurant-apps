import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';

const DetailRestaurant = {
  async render() {
    return `
      <section>
        <loading-component></loading-component>
        <restaurant-detail></restaurant-detail>
        <error-component></error-component>
      </section>
      <section class="bg-grey">
        <restaurant-menu></restaurant-menu>
      </section>
      <section>
        <customer-review></customer-review>
      </section>
      
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailRestaurant(url.id);
    const restaurantDetailElement = document.querySelector('restaurant-detail');
    const restaurantMenuElement = document.querySelector('restaurant-menu');
    const customerReviewElement = document.querySelector('customer-review');
    const loadingComponentElement = document.querySelector('loading-component');
    const errorComponentElement = document.querySelector('error-component');

    try {
      restaurantDetailElement.restaurant = restaurant.restaurant;
      restaurantMenuElement.menus = restaurant.restaurant.menus;
      customerReviewElement.restaurant = restaurant.restaurant;
      restaurantDetailElement.style.display = 'block';
      restaurantMenuElement.style.display = 'block';
      customerReviewElement.style.display = 'block';
      loadingComponentElement.style.display = 'none';
      errorComponentElement.style.display = 'none';

      LikeButtonPresenter.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        favoriteRestaurant: FavoriteRestaurantIdb,
        restaurant: {
          id: restaurant.restaurant.id,
          pictureId: restaurant.restaurant.pictureId,
          name: restaurant.restaurant.name,
          rating: restaurant.restaurant.rating,
          city: restaurant.restaurant.city,
          description: restaurant.restaurant.description,
        },
      });
    } catch (e) {
      restaurantDetailElement.style.display = 'none';
      restaurantMenuElement.style.display = 'none';
      customerReviewElement.style.display = 'none';
      loadingComponentElement.style.display = 'none';
      errorComponentElement.style.display = 'block';
    }
  },
};

export default DetailRestaurant;
