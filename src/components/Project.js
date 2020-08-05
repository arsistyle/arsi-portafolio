import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';
import { getProject } from '../services';
import Banner from '../components/Banner';
import { SectionContact } from '../components/Sections';
import Breadcrumb from '../components/Breadcrumbs';
import LazyLoad from 'react-lazyload';

import '../assets/scss/style/components/Project.scss';

const PlaceholderProject = () => (
  <div className='project__shots__item'>
    <div className='project__shots__title project__shots__title--placeholder placeholder--child'></div>
    <div className='project__shots__caption project__shots__caption--placeholder placeholder--child'></div>
    <div className='project__shots__caption project__shots__caption--placeholder placeholder--child'></div>
    <div className='project__shots__image project__shots__image--placeholder placeholder--child'></div>
  </div>
);

const Project = () => {
  const { slug } = useParams();
  const [loading, setLoading] = useState(true);
  const [project, setProject] = useState([]);
  const options = {
    items: [
      { to: '/', label: 'Inicio' },
      { to: '/proyectos', label: 'Proyectos' },
      { to: `/proyectos/${slug}`, label: project.title, active: true },
    ],
  };

  useEffect(() => {
    async function loadProject() {
      const response = await getProject(slug);
      if (response) {
        setProject(response[0]);
        setLoading(false);
      }
    }
    loadProject();
  }, [slug]);
  return !loading ? (
    <div className='project'>
      <Banner img={project.acf.banner_imagen && project.thumbnail} color={project.acf.bg_color} animated={project.acf.bg_animated} />
      <div className='container-fluid'>
        <div className='frame'>
          <div className='project__content'>
            <header className='project__content__header'>
              <Breadcrumb separator={<IoIosArrowForward />}>
                {options.items.map(({ to, label, active }) => {
                  return <Link className={`breadcrumbs__link ${active && `breadcrumbs__link--active`}`} key={to} to={to} dangerouslySetInnerHTML={{ __html: label }}></Link>;
                })}
              </Breadcrumb>
              <h1>{project.title}</h1>
            </header>
            <section className='project__content__inside' dangerouslySetInnerHTML={{ __html: project.acf.content }}></section>
            {project.acf.capturas?.length && (
              <section className='project__content__shots'>
                {project.acf.capturas.map((x, i) => (
                  <LazyLoad placeholder={<PlaceholderProject />} throttle={3000} key={i}>
                    <div className='project__shots__item'>
                      <h3 className='project__shots__title'>{x.title}</h3>
                      <p className='project__shots__caption'>{x.caption}</p>
                      <div className='project__shots__image'>
                        <img src={x.shot} alt={x.title} />
                      </div>
                    </div>
                  </LazyLoad>
                ))}
              </section>
            )}
          </div>
        </div>
      </div>
      <SectionContact />
    </div>
  ) : (
    <div className='project'>
      <div className='banner banner--placeholder placeholder--child' />
      <div className='container-fluid'>
        <div className='frame'>
          <div className='project__content'>
            <header className='project__content__header'>
              <div className='breadcrumbs'>
                <div className='breadcrumbs__item breadcrumbs__item--placeholder placeholder--child'></div>
                <div className='breadcrumbs__item breadcrumbs__item--placeholder placeholder--child'></div>
              </div>
              <div className='project__title--placeholder placeholder--child'></div>
            </header>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
