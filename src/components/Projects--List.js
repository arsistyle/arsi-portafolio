import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import { HTML } from '../functions';
import { getProjects } from '../services';
import Image from './Image';
import Filter from './Filter';

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

const placeholders = [];
for (let i = 0; i < 3; i++) {
  placeholders.push(<PlaceholderProject key={i} />);
}

const Projects = (props) => {
  const { items, filter, cat_slug } = props;
  const { slug } = useParams();
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function loadProjects() {
      const response = await getProjects(slug ? slug : null, items ? items : null, cat_slug ? cat_slug : null);
      if (response) {
        setProjects(response);
        setLoading(false);
      }
    }
    loadProjects();
  }, [cat_slug, items, filter, slug]);
  return loading ? (
    <div className='projects__list'>{placeholders}</div>
  ) : (
    <>
      {filter && <Filter />}
      <div className='projects__list'>
        {projects.map((item, i) => (
          <LazyLoad placeholder={<PlaceholderProject />} throttle={3000} key={i}>
            <Link to={item.path} className={`projects__item ${filter && `projects__item--filter`}`}>
              <div className='projects__image'>
                <Image
                  src={item.portada}
                  alt={item.name}
                  backgroundColor={item.portada_color_dominante}
                />
              </div>
              <div className='projects__info'>
                <h3 className='projects__title'>{HTML(item.title)}</h3>
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
    </>
  );
};

export default Projects;
