class LoadingComponent extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({
      mode: "open",
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

    .loading-container{
      padding-top: 40px;
    }

    .image-container img{
      height: 250px;
      width: 100%;
      object-fit: contain;
    }
  
    .loading-description{
      margin: 30px 0;
      text-align: center;
      font-weight: bold;
    }
  
    @media screen and (min-width: 650px) {
      .image-container img{
        height: 300px;
      }
  
      .loading-description{
        font-size: 20px;
      }
    }
  
    @media screen and (min-width: 992px) {
      .image-container img{
        height: 350px;
      }
  
      .loading-description{
        font-size: 22px;
      }
    }
    </style>
    <div class="loading-container">
      <figure>
        <div class="image-container">
          <picture>
            <source type="image/webp" srcset="/images/loading-image.webp">
            <img src="/images/loading-image.png" alt="Loading Image" />
          </picture>
        </div>
      </figure>
      <div class="description-container">
        <div class="loading-description">
          <p>Data being loaded, please wait!</p>
        </div>
      </div>
    </div>`;
  }
}

customElements.define("loading-component", LoadingComponent);
