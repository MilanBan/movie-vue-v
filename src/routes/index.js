import AddMovie from '../components/AddMovie';
import Movies from '../components/Movies';

export const routes = [

  { path: '/movies', name: 'movies', component: Movies},
  { path: '/add-movie', name: 'add-movie', component: AddMovie},
  { path: '/', redirect: '/movies'},
];