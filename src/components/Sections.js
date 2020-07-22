import React from 'react';
import { NavLink } from 'react-router-dom';
import ProjectsList from './ProjectsList';

import pattern from '../assets/img/pattern-contactme.png';

import '../assets/scss/style/components/Sections.scss'

export const SectionProjects = () => {
  return (
    <section className='section section--projects projects'>
      <div className='frame'>
        <h2 className='text-align-center-xs'>Últimos proyectos</h2>
        <ProjectsList items={6}/>
        <div className='projects__btn text-align-right-xs'>
          <div className='separador'></div>
          <NavLink to='/proyectos' className='btn btn--secundario btn--borde'>
            Ver todos
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export const SectionContact = () => {
  return (
    <section
      className='section section--contact contact'
      style={{
        backgroundImage: `url(${pattern})`,
        backgroundSize: 400
      }}
    >
      <div className='frame'>
        <div className='section__contact text-align-center-xs'>
          <h2 className='h1'>Trabajemos juntos</h2>
          <NavLink to='/trabajemos-juntos' className='btn btn--primario'>
            Contáctame
          </NavLink>
        </div>
      </div>
    </section>
  );
}