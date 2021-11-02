class NoDataComponent extends HTMLElement {
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
  
      .no-data-container{
        padding-top: 40px;
      }
  
      .image-container img{
        height: 250px;
        width: 100%;
        object-fit: contain;
      }
    
      .no-data-description{
        margin: 30px 0;
        text-align: center;
        font-weight: bold;
      }
    
      @media screen and (min-width: 650px) {
        .image-container img{
          height: 300px;
        }
    
        .no-data-description{
          font-size: 20px;
        }
      }
    
      @media screen and (min-width: 992px) {
        .image-container img{
          height: 350px;
        }
    
        .no-data-description{
          font-size: 22px;
        }
      }
      </style>
      <div class="no-data-container">
        <figure>
          <div class="image-container">
            <picture>
              <source type="image/webp" srcset="/images/no-data-image.webp">
              <img src="/images/no-data-image.png" alt="No Data Image" />
            </picture>
          </div>
        </figure>
        <div class="description-container">
          <div class="no-data-description">
            <p>You don't have a favorite restaurant yet.</p>
          </div>
        </div>
      </div>`;
  }
}

customElements.define('no-data-component', NoDataComponent);
