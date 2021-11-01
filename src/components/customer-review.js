import './review-data';
import RestaurantSource from '../scripts/data/restaurant-source';

class CustomerReview extends HTMLElement {
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

    .review-container{
      margin-bottom: 40px;
    }

    .title-section{
      font-size: 24px;
      text-align: center;
      text-transform: uppercase;
      color: #4b4b4b;
    }

    .title-section{
      font-size: 22px;
    }

    .form, .review-data{
      margin-top: 40px;
    }

    label{
      display: block;
      font-weight: bold;
      margin-bottom: 5px;
    }

    .form-control{
      width: 100%;
      min-height: 44px;
      margin-bottom: 10px;
      padding: 10px;
    }

    .form-button{
      min-height: 44px;
      width: 88px;
      padding: 10px;
      background-color: #2b2b2b;
      color: #fff;
      cursor: pointer;
    }

    .form-control:focus, .form-button:focus{
      outline: 5px solid #edCa0d;
    }

    .review-list{
      margin-top: 40px;
      padding-bottom: 40px;
    }

    @media screen and (min-width: 650px) {
      .form-control, .form-button{
        font-size: 16px;
      }
    }
    </style>
    <div class="review-container">
      <h2 class="title-section">Customer Reviews</h2>
      <div class="form">
        <div class="form-input">
          <label for="inputName">Your Name</label>
          <input class="form-control" type="text" id="inputName" placeholder="Type your name" required>
        </div>
        <div class="form-input">
          <label for="inputReview">Your Review</label>
          <textarea class="form-control" id="inputReview" placeholder="Type your review" rows="4" cols="50"></textarea>
        </div>
        <button class="form-button" id="submit">Submit</button>
      </div>
      <div class="review-list">
        <h3 class="subtitle-section">List of Review (${this._restaurant.customerReviews.length})</h3>
        <div class="review-data"></div>
      </div>
    </div>`;

    this._restaurant.customerReviews.reverse().forEach((review) => {
      const reviewDataElement = document.createElement('review-data');
      reviewDataElement.review = review;
      this.shadowDOM
        .querySelector('.review-data')
        .appendChild(reviewDataElement);
    });

    const inputName = this.shadowDOM.querySelector('#inputName');
    const inputReview = this.shadowDOM.querySelector('#inputReview');
    const buttonReview = this.shadowDOM.querySelector('#submit');
    buttonReview.addEventListener('click', () => {
      const reviewData = {
        id: this._restaurant.id,
        name: inputName.value,
        review: inputReview.value,
      };
      RestaurantSource.addReview(reviewData);
    });
  }
}

customElements.define('customer-review', CustomerReview);
