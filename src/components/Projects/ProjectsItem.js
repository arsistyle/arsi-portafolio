import React from 'react';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
// import ReactHtmlParser from 'react-html-parser';

const PlaceholderImage = () => (
  <div className='projects__image placeholder--child'></div>
);

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

const ProjectItem = props => {
  return (
    <LazyLoad placeholder={<PlaceholderProject />} throttle={3000}>
      <Link
        to={props.url}
        className={`projects__item ${props.tags.map(x => x.filter).join(' ')}`}
      >
        <div className='projects__image'>
          <img src={props.image} alt={props.name} />
        </div>
        <div className='projects__info'>
          <h3 className='projects__title'>{props.title}</h3>
          <div className='projects__tags'>
            {props.tags.map((x, i) => (
              <span className='projects__tags__item' key={i}>
                {x.label}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </LazyLoad>
  );
};

export default ProjectItem;
