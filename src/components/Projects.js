import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import { getProjects } from '../services';

import '../assets/scss/style/components/Projects.scss';

const PlaceholderImage = () => <div className='projects__image placeholder--child'></div>;

const PlaceholderProject = () => (
  <div className='projects__item placeholder'>
    <PlaceholderImage />
    <div className='projects__info placeholder'>
      <div className='projects__title placeholder--child'></div>
      <div className='projects__tags'>
        <div className='projects__tags__item placeholder--child'></div>
        <div className='projects__tags__item placeholder--child'></div>
      </div>
    </div>
  </div>
);

const items = [];
for (let i = 0; i < 3; i++) {
  items.push(<PlaceholderProject key={i}/>);
}

const Projects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function loadProjects() {
      const response = await getProjects(null, 6);
      if (response) {
        setProjects(response);
        setLoading(false);
      }
    }
    loadProjects();
  }, []);
  return loading ? (
    <>{items}</>
  ) : (
    <div className='projects__list'>
      {projects.map((item, i) => (
        <LazyLoad placeholder={<PlaceholderProject />} throttle={3000} key={i}>
          <Link to={item.path} className={`projects__item`}>
            <div className='projects__image'>
              <img src={item.thumbnail} alt={item.name} />
            </div>
            <div className='projects__info'>
              <h3 className='projects__title'>{item.title}</h3>
              <div className='projects__tags'>
                {item.categorias.map((x, i) => (
                  <span className='projects__tags__item' key={i}>
                    {x.name}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        </LazyLoad>
      ))}
    </div>
  );
};

export default Projects;
