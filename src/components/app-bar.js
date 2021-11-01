class AppBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({
      mode: 'open',
    });
  }

  connectedCallback() {
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

    .header-container{
      background-color: #2b2b2b;
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      z-index: 999;
      padding: 20px;
    }

    .header-inner{
      display: flex;
      justify-content: space-between;
    }

    a{
      min-height: 44px;
      min-width: 44px;
      color: #fff;
      text-decoration: none;
    }

    .logo{
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 30px;
      font-weight: 600;
      letter-spacing: 2px;
    }

    .header-menu{
      min-height: 44px;
      min-width: 44px;
      background-color: transparent;
      border: none;
      color: #fff;
      font-size: 30px;
      cursor: pointer;
    }

    a:hover, button:hover{
      color: #edCa0d;
    }

    #navigationDrawer{
      display: none;
    }

    #navigationDrawer.open{
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #2b2b2b;
    }

    .nav-list {
      display: flex;
      flex-direction: column;
      list-style-type: none;
      text-align: center;
      max-height: 600px;
    }

    .list-item{
      margin: 15px 0;
      font-size: 18px;
    }

    @media screen and (min-width: 650px) {
      .header-container{
        display: flex;
        justify-content: space-between;
        padding: 20px 40px;
      }

      .header-menu{
        display: none;
      }

      #navigationDrawer{
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .nav-list {
        flex-direction: row;
        list-style-type: none;
        text-align: center;
      }

      .list-item{
        margin: 0 20px;
        font-size: 18px;
      }
    }

    @media screen and (min-width: 768px) {
      .header-container{
        padding: 20px 60px;
      }
    }

    @media screen and (min-width: 992px) {
      .header-container{
        padding: 20px 80px;
      }
    }

    @media screen and (min-width: 1200px) {
      .header-container{
        padding: 20px 100px;
      }
    }

    @media screen and (min-width: 1440px) {
      .header-container{
        padding: 20px 160px;
      }
    }

    @media screen and (min-width: 2560px) {
      .header-container{
        padding: 20px 600px;
      }
    }
    </style>
    <header>
      <div class="header-container">
        <div class="header-inner">
          <a class="logo" href="#">Rest'au</a>
          <button id="menuButton" class="header-menu" aria-label="navigation-menu">☰</button>
        </div>
        <nav id="navigationDrawer">
          <ul class="nav-list">
            <li class="list-item">
                <a href="#">Home</a>
            </li>
            <li class="list-item">
                <a href="#/favorite">Favorite</a>
            </li>
            <li class="list-item">
                <a href="https://www.linkedin.com/in/matthewdesailly/" target="_blank" rel="noopener">About Us</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>`;
  }
}

customElements.define('app-bar', AppBar);
