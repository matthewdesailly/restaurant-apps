import Home from '../views/pages/home';
import DetailRestaurant from '../views/pages/detail-restaurant';
import Favorite from '../views/pages/favorite-restaurant';

const routes = {
  '/': Home,
  '/detail-restaurant/:id': DetailRestaurant,
  '/favorite': Favorite,
};

export default routes;
