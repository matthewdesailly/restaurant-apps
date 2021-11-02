import 'regenerator-runtime';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import swRegister from './utils/sw-register';
import '../styles/main.css';
import '../styles/config.css';
import '../styles/responsive.css';
import '../components/app-bar';
import '../components/hero-component';
import '../components/restaurant-list';
import '../components/restaurant-favorite-list';
import '../components/restaurant-detail';
import '../components/restaurant-menu';
import '../components/customer-review';
import '../components/download-component';
import '../components/footer-element';
import '../components/loading-component';
import '../components/error-component';
import '../components/no-data-component';
import App from './views/app';

const appBar = document.querySelector('app-bar').shadowRoot;

const app = new App({
  button: appBar.querySelector('#menuButton'),
  drawer: appBar.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
