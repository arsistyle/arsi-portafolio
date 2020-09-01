import React from 'react';
import Image from './Image';
import imgDescarga from '../assets/img/cv-pdf.svg';

import '../assets/scss/style/components/Resume.scss';

const Resume = ({ page }) => {
  const { about, avatar, courses, studies, job, jobs, name, pdf } = page.acf;
  return (
    <div className='resume'>
      <header className='resume__header'>
        <div className='resume__header__image'>
          <Image src={avatar.url} alt={name} />
        </div>
        <div className='resume__header__info'>
          <div className='resume__header__name'>{name}</div>
          <div className='resume__header__job'>{job}</div>
        </div>
      </header>
      <section className='resume__about'>
        <div className='resume__subtitle'>Acerca de mi</div>
        <p className='resume__about__data'>{about}</p>
      </section>
      {jobs?.length && (
        <section className='resume__data'>
          <div className='resume__subtitle'>Experiencia</div>
          <div className='resume__data__container'>
            {jobs.map((x, i) => (
              <div className='resume__data__item' key={i}>
                <div className='resume__data__date'>{`${x.date_started} - ${x.today ? 'Presente' : x.date_finished}`}</div>
                <div className={`resume__data__title ${x.today ? 'resume__data__title--today' : ''}`}>{x.company}</div>
                <div className='resume__data__detail'>{x.job}</div>
                <div className='resume__data__description'>{x.description}</div>
              </div>
            ))}
          </div>
        </section>
      )}
      {studies?.length && (
        <section className='resume__data'>
          <div className='resume__subtitle'>Estudios</div>
          <div className='resume__data__container'>
            {studies.map((x, i) => (
              <div className='resume__data__item' key={i}>
                <div className='resume__data__date'>{`${x.date_started} - ${x.today ? 'Presente' : x.date_finished}`}</div>
                <div className={`resume__data__title ${x.today ? 'resume__data__title--today' : ''}`}>{x.school}</div>
                <div className='resume__data__detail'>{x.career}</div>
                {x.description && <div className='resume__data__description'>{x.description}</div>}
              </div>
            ))}
          </div>
        </section>
      )}
      {courses?.length && (
        <section className='resume__data'>
          <div className='resume__subtitle'>Cursos / Workshops</div>
          <div className='resume__data__container'>
            {courses.map((x, i) => (
              <div className='resume__data__item' key={i}>
                <div className='resume__data__date'>{x.year}</div>
                <div className='resume__data__title'>{x.title}</div>
                <div className='resume__data__detail'>{x.detail}</div>
              </div>
            ))}
          </div>
        </section>
      )}
      {pdf && (
        <section className='resume__pdf'>
          <a href={pdf} className='resume__pdf' target='_blank' rel="noopener noreferrer">
            <img src={imgDescarga} alt='Descarga PDF' />
          </a>
        </section>
      )}
    </div>
  );
};

export default Resume;
