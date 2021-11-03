import CONFIG from '../scripts/globals/config';

class RestaurantDetail extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({
      mode: 'open',
    });
  }

  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
    <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    :host{
      display: none;
    }

    .detail-container{
      padding-top: 40px;
    }
  
    .image-container img{
      height: 250px;
      width: 100%;
      object-fit: cover;
      border-radius: 5px;
      filter: grayscale(20%);
    }
  
    .restaurant-name{
      font-size: 24px;
      text-align: center;
      text-transform: uppercase;
      color: #4b4b4b;
      margin-bottom: 40px;
    }
  
    .description-container{
      padding: 15px 0;
    }
  
    .restaurant-description{
      padding-top: 10px;
      margin-bottom: 10px;
      text-align: justify;
    }

    .restaurant-location, .restaurant-rating{
      display: flex;
      margin-top: 15px;
    }
  
    .restaurant-location p, .restaurant-rating p{
      padding-left: 10px;
    }

    .restaurant-location:before{
      background: url("./icons/location-marker.svg") no-repeat;
      content: "";
      width: 20px;
    }

    .restaurant-rating:before{
      background: url("./icons/rating.svg") no-repeat;
      content: "";
      width: 20px;
    }

    @media screen and (min-width: 650px) {
      .image-container img{
        height: 350px;
      }
    }

    @media screen and (min-width: 992px) {
      .detail-inner{
        display: flex;
      }

      figure{
        flex-basis: 50%;
      }

      .description-container{
        flex-basis: 50%;
        padding: 0 40px;
      }
    }
    </style>
    <div class="detail-container">
      <h2 class="restaurant-name">${this._restaurant.name}</h2>
      <div class="detail-inner">
        <figure>
          <div class="image-container">
            <picture>
              <source media="(min-width: 992px)" srcset="${CONFIG.BASE_URL}images/medium/${this._restaurant.pictureId}" type="image/webp">
              <img src="${CONFIG.BASE_URL}images/small/${this._restaurant.pictureId}" alt="${this._restaurant.name}" />
            </picture>
          </div>
        </figure>
        <div class="description-container">
          <div class="restaurant-description">
            <p>${this._restaurant.description}</p>
          </div>
          <div class="restaurant-location">
            <p>${this._restaurant.address}, ${this._restaurant.city}</p>
          </div>
          <div class="restaurant-rating">
            <p>${this._restaurant.rating}</p>
          </div>
        </div>
      </div>
    </div>`;
  }
}

customElements.define('restaurant-detail', RestaurantDetail);
