class FoodItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({
      mode: 'open',
    });
  }

  set food(food) {
    this._food = food;
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

    figure{
      margin-bottom: 15px;
    }

    .image-container{
      position: relative;
      overflow: hidden;
    }

    .image-container img{
      height: 250px;
      width: 100%;
      object-fit: contain;
    }

    .food-name{
      position: absolute;
      display: flex;
      align-items: flex-end;
      left: 0;
      right: 0;
      bottom: 0;
      color: #fff;
      background-color: #2b2b2b;
      padding: 15px 20px;
      opacity: .9;
    }
    </style>
    <figure>
      <div class="image-container">
        <picture>
          <source type="image/webp" srcset="/images/menu-placeholder.webp">
          <img src="/images/menu-placeholder.png" alt="${this._food.name}" />
        </picture>
        <div class="image-inner">
          <div class="food-name">
            <p>${this._food.name}</p>
          </div>
        </div>
      </div>
    </figure>`;
  }
}

customElements.define('food-item', FoodItem);
