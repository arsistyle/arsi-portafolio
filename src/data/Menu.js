import Home from '../components/Home/Home';
import Projects from '../components/Projects/Projects';

export const MENU = [
  {
    name: 'inicio',
    label: 'Inicio',
    url: '/',
    component: Home
  },
  {
    name: 'proyectos',
    label: 'Proyectos',
    url: '/proyectos',
    component: Projects
  }
];
