import CONFIG from '../scripts/globals/config';

class RestaurantFavoriteItem extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    this.innerHTML = `
    <figure>
      <div class="image-container">
        <a href="#/detail-restaurant/${this._restaurant.id}">
          <picture>
            <source media="(min-width: 650px)" srcset="${CONFIG.BASE_URL}images/medium/${this._restaurant.pictureId}" type="image/webp">
            <source media="(min-width: 992px)" srcset="${CONFIG.BASE_URL}images/large/${this._restaurant.pictureId}" type="image/webp">
            <img class="lazyload" data-src="${CONFIG.BASE_URL}images/small/${this._restaurant.pictureId}" alt="${this._restaurant.name}" />
          </picture>
          <div class="image-inner text-white">
            <div class="name-container">
              <p>${this._restaurant.name}</p>
            </div>
            <div class="rating-container mt-3 mr-3 rounded">
              <p class="pl-1">${this._restaurant.rating}</p>
            </div>
          </div>
        <a>
      </div>
      <div class="description-container">
        <div class="location-text">
          <p>${this._restaurant.city}</p>
        </div>
        <div class="description-text">
          <p>${this._restaurant.description}</p>
        </div>
      </div>
    </figure>`;
  }
}

customElements.define('restaurant-favorite-item', RestaurantFavoriteItem);
