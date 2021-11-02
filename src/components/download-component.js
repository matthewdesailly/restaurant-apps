class DownloadComponent extends HTMLElement {
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
    
    .download-item {
      display: inline-block;
      margin: 0 auto;
    }
    
    .download-item img {
      max-width: 250px;
    }
    </style>
    <div class="download-item">
      <a href="#">
        <picture>
          <source type="image/webp" srcset="/images/google-play-badge.webp">
          <img src="/images/google-play-badge.png" alt="Google Play"/>
        </picture>
      </a>
    </div>`;
  }
}

customElements.define("download-element", DownloadComponent);
