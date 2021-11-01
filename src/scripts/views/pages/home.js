import RestaurantSource from '../../data/restaurant-source';

const Home = {
  async render() {
    return `
      <hero-element></hero-element>
      <section>
        <h2 class="title-section">Restaurants</h2>
        <loading-component></loading-component>
        <restaurant-list></restaurant-list>
        <error-component></error-component>
      </section>
      <section class="download-section bg-grey">
        <h2 class="title-section">Explore more on</h2>
        <download-element></download-element>
      </section>
      `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.getAllRestaurant();
    const restaurantListElement = document.querySelector('restaurant-list');
    const loadingComponentElement = document.querySelector('loading-component');
    const errorComponentElement = document.querySelector('error-component');

    try {
      restaurantListElement.restaurants = restaurants;
      restaurantListElement.style.display = 'block';
      loadingComponentElement.style.display = 'none';
      errorComponentElement.style.display = 'none';
    } catch (e) {
      restaurantListElement.style.display = 'none';
      loadingComponentElement.style.display = 'none';
      errorComponentElement.style.display = 'block';
    }
  },
};

export default Home;
