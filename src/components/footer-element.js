class FooterElement extends HTMLElement {
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

    footer {
      background-color: #2b2b2b;
      color: #f1f1f1;
      text-align: center;
    }
    
    footer p{
      padding: 15px 0;
    }
      
    footer span {
      color: #edca0d;
    }
    </style>
    <footer>
      <p>© Copyright <span>made</span> 2021</p>
    </footer>`;
  }
}

customElements.define('footer-element', FooterElement);
