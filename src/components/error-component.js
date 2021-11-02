class ErrorComponent extends HTMLElement {
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

    :host{
      display: none;
    }

    .error-container{
      padding-top: 40px;
    }
  
    .image-container img{
      height: 250px;
      width: 100%;
      object-fit: contain;
    }

    .error-description{
      margin: 30px 0;
      text-align: center;
      font-weight: bold;
    }

    @media screen and (min-width: 650px) {
      .image-container img{
        height: 300px;
      }

      .error-description{
        font-size: 20px;
      }
    }

    @media screen and (min-width: 992px) {
      .image-container img{
        height: 350px;
      }

      .error-description{
        font-size: 22px;
      }
    }
    </style>
    <div class="error-container">
      <figure>
        <div class="image-container">
          <picture>
            <source type="image/webp" srcset="/images/error-image.webp">
            <source type="image/png" srcset="/images/error-image.png">
            <img src="/images/error-image.png" alt="Error Image"/>
          </picture>
        </div>
      </figure>
      <div class="description-container">
        <div class="error-description">
          <p>Data is not found, please refresh the page or try again later!</p>
        </div>
      </div>
    </div>`;
  }
}

customElements.define('error-component', ErrorComponent);
