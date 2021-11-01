import './food-item';
import './drink-item';

class RestaurantMenu extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({
      mode: 'open',
    });
  }

  set menus(menus) {
    this._menus = menus;
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

    .menu-container{
      padding: 40px 0;
    }

    .food-container, .drink-container{
      margin-top: 40px;
    }

    .title-section{
      font-size: 24px;
      text-align: center;
      text-transform: uppercase;
      color: #4b4b4b;
    }

    .subtitle-section{
      font-size: 22px;
      color: #4b4b4b;
      margin-bottom: 40px;
    }

    .food-list, .drink-list{
      display: grid;
      grid-template-columns: 1fr;
      row-gap: 30px;
      column-gap: 16px;
      margin-top: 20px;
    }

    @media screen and (min-width: 650px) {
      .food-list, .drink-list{
        grid-template-columns: 1fr 1fr;
      }
    }
  
    @media screen and (min-width: 992px) {
      .food-list, .drink-list{
        grid-template-columns: 1fr 1fr 1fr;
      }
    }
    </style>
    <div class="menu-container">
      <h2 class="title-section">Menu</h2>
      <div class="food-container">
        <h3 class="subtitle-section">Foods</h3>
        <div class="food-list"></div>
      </div>
      <div class="drink-container">
        <h3 class="subtitle-section">Drinks</h3>
        <div class="drink-list"></div>
      </div>
    </div>`;

    this._menus.foods.forEach((food) => {
      const menuFoodElement = document.createElement('food-item');
      menuFoodElement.food = food;
      this.shadowDOM.querySelector('.food-list').appendChild(menuFoodElement);
    });

    this._menus.drinks.forEach((drink) => {
      const menuDrinkElement = document.createElement('drink-item');
      menuDrinkElement.drink = drink;
      this.shadowDOM.querySelector('.drink-list').appendChild(menuDrinkElement);
    });
  }
}

customElements.define('restaurant-menu', RestaurantMenu);
