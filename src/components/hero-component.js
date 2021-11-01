class HeroComponent extends HTMLElement {
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

    .container{
      overflow: hidden;
    }

    .hero{
      display: flex;
      min-height: 500px;
      width: 100%;
      align-items: center;
      text-align: center;
      background-image: url("./hero/hero-image-small.jpg");
      background-repeat: no-repeat;
      background-size: cover;
      background-attachment: fixed;
      filter: grayscale(20%);
      animation: focus 4s;
    }

    .hero-inner{
      margin: 0 auto;
      padding: 20px;
      backdrop-filter: blur(1px);
      filter: grayscale(80%);
      border-radius: 5px;
    }

    .hero-title{
      color: #fff;
      font-size: 48px;
    }

    .hero-tagline{
      color: #fff;
      margin-top: 16px;
      font-size: 18px;
    }

    @keyframes focus{
      from{
          transform: scale(1.5); 
          filter: grayscale(20%) blur(1.5px);
      }
      to{
          transform: none;
          filter: grayscale(20%) blur(0);
      }
    }

    @media screen and (min-width: 650px) {
      .hero{
        background-image: url("./hero/hero-image-medium.jpg");
      }
    }

    @media screen and (min-width: 992px) {
      .hero{
        background-image: url("./hero/hero-image-large.jpg");
      }

      .hero-title{
        color: #fff;
        font-size: 64px;
      }
  
      .hero-tagline{
        color: #fff;
        margin-top: 16px;
        font-size: 24px;
      }  
    }

    @media screen and (min-width: 1200px) {
      .hero{
        min-width: 1000px;
      }
    }
    </style>
    <div class="container">
        <div class="hero">
          <div class="hero-inner">
            <h1 class="hero-title">
              Welcome to Rest'au
            </h1>
            <p class="hero-tagline">
              Discover restaurants around you
            </p>
          </div>
        </div>
    </div>`;
  }
}

customElements.define('hero-element', HeroComponent);
