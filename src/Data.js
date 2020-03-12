import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Avatar from "./assets/img/avatar.jpg";

export const Global = {
  title: "Arsi Portafolio",
  author: "Arsi Larrondo",
  job: "Diseñador Front-End",
  rrss: [
    {
      label: "Dribble",
      url: "http://arsilarrondo.dribbble.com/",
      icon: `<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width="50" height="50" viewBox="0 0 50 50"><<path class="st0" d="M49.5 20L49.5 20C46.7 6.4 33.5-2.3 20 0.5 6.4 3.3-2.3 16.5 0.5 30c1 4.8 3.4 9.2 6.8 12.6 1.1 1.1 2.4 2.2 3.7 3 9.9 6.7 23.2 5.4 31.7-3 1.1-1.1 2.2-2.4 3.1-3.7C49.5 33.4 50.8 26.5 49.5 20zM39.1 9C39 9.1 36 13.7 27.9 16.7c-2.4-4.3-5-8.5-8-12.5C26.7 2.6 33.9 4.4 39.1 9zM15.9 5.7C15.9 5.7 15.9 5.7 15.9 5.7L15.9 5.7C15.9 5.7 15.9 5.7 15.9 5.7c2.9 3.9 5.5 8.1 7.9 12.3 -6.4 1.7-13.1 2.6-19.7 2.6C5.5 14.1 9.8 8.5 15.9 5.7zM9.1 39.3c-3.5-3.9-5.5-9-5.5-14.3 0-0.2 0-0.5 0-0.7 7.4 0 14.8-1 21.9-3 0.6 1.2 1.2 2.4 1.7 3.6 -0.3 0.1-0.6 0.2-0.8 0.3C15 28.9 9.1 39.3 9.1 39.3 9.1 39.3 9.1 39.3 9.1 39.3zM25 46.4c-4.8 0-9.4-1.6-13.1-4.5 0 0 0 0 0 0s-0.2-0.1-0.5-0.4c0.2 0.1 0.3 0.2 0.5 0.4 0-0.1 4.2-8.9 16.8-13.3 0 0 0.1 0 0.1 0 2 5.2 3.6 10.7 4.6 16.2C30.7 45.8 27.9 46.4 25 46.4zM36.9 42.7c-0.9-5.2-2.3-10.3-4.2-15.3 4.4-0.7 9-0.3 13.3 0.9C45.1 34.2 41.8 39.4 36.9 42.7zM31.5 24.1c-0.2-0.4-0.3-0.7-0.5-1.1 -0.4-1-0.9-2.1-1.4-3.1 8.4-3.4 11.9-8.4 11.9-8.4 3.1 3.8 4.8 8.5 4.9 13.3C41.5 23.8 36.4 23.6 31.5 24.1z"/></svg>`
    },
    {
      label: "Behance",
      url: "http://arsilarrondo.dribbble.com/",
      icon: `<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width="50" height="50" viewBox="0 0 50 31.7"><path d="M20.1 14.2c0 0 4.7-0.4 4.7-5.9C24.8 2.7 20.9 0 16 0H0v31h16c0 0 9.8 0.3 9.8-9.2C25.8 21.9 26.3 14.2 20.1 14.2zM7.1 5.5L7.1 5.5h9c0 0 2.2 0 2.2 3.2s-1.3 3.7-2.7 3.7H7.1V5.5zM15.6 25.5c-0.2 0-0.4 0-0.6 0H7.1v-8.3h9c0 0 3.2 0 3.2 4.3C19.3 25.1 16.9 25.5 15.6 25.5z"/><path d="M39.2 8C27.3 8 27.4 19.9 27.4 19.9s-0.8 11.8 11.8 11.8c0 0 10.5 0.6 10.5-8.2h-5.4c0 0 0.2 3.3-4.9 3.3 0 0-5.4 0.4-5.4-5.4h16C49.9 21.4 51.7 8 39.2 8zM33.9 17.3c0 0 0.7-4.8 5.4-4.8 4.8 0 4.7 4.8 4.7 4.8H33.9z"/><rect x="32.6" y="1.8" width="12.7" height="3.8"/></svg>`
    }
    // {
    //   label: 'Facebook',
    //   url: 'https://www.facebook.com/arsilarrondo/',
    //   icon:
    // },
  ]
};

export const Menu = [
  {
    name: "inicio",
    label: "Inicio",
    url: "/",
    component: Home
  },
  {
    name: "proyectos",
    label: "Proyectos",
    url: "/proyectos",
    component: Projects
  }
];

export const Hero = {
  name: "Arsi Larrondo",
  job: "Diseñador Front-End",
  avatar: Avatar,
  btns: [
    {
      label: "Proyectos",
      props: {
        to: "/proyectos",
        className: "btn btn--primario btn--big"
      }
    },
    {
      label: "Conóceme",
      props: {
        to: "/perfil",
        className: "btn btn--secundario btn--big btn--borde"
      }
    }
  ]
};

export const ProjectsList = [
  {
    id: 0,
    title: "PlacerHama",
    slug: "placerhama",
    image: "/img/projects/placerhama.png",
    tags: ["Front-End", "UI"]
  },
  {
    id: 2,
    title: "Cactus espacial",
    slug: "cactus-espacial",
    image: "/img/projects/cactus-espacial.png",
    tags: ["Logo", "Ilustración"]
  },
  {
    id: 3,
    title: "Botones Hover",
    slug: "botones-hover",
    image: "/img/projects/botones-hover.gif",
    tags: ["Front-End", "UXI"]
  }
];
