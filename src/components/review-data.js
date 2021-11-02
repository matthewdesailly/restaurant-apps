import './food-item';
import './drink-item';

class ReviewData extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({
      mode: 'open',
    });
  }

  set review(review) {
    this._review = review;
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

    .data-container{
      border: 1px solid #2b2b2b;
      border-radius: 5px;
      word-wrap: break-word;
      padding: 5px 10px;
      margin-bottom: 20px;
    }

    .user-name{
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1; 
      -webkit-box-orient: vertical;
    }

    .user-name p{
      font-weight: bold;
    }

    .user-date p{
      font-size: 14px;
      font-weight: lighter;
    }

    .user-review{
      margin-top: 10px;
    }
    </style>
    <div class="data-container">
      <div class="data-inner">
        <div class="user-name">
          <p>${this._review.name}</p>
        </div>
        <div class="user-date">
          <p>${this._review.date}</p>
        </div>
        <div class="user-review">
          <p>${this._review.review}</p>
        </div>
      </div>
    </div>`;
  }
}

customElements.define('review-data', ReviewData);
