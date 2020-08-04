import React from 'react';

import '../assets/scss/style/components/Resume.scss';

const Resume = ({ page }) => {
  const { about, avatar, job, jobs, name } = page.acf;
  return (
    <div className='resume'>
      <header className='resume__header'>
        <div className='resume__header__image'>
          <img src={avatar} alt={name} />
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
      <section className='resume__jobs'>
        {jobs.map((x, i) => (
          <div className="resume__jobs__item" key={i}>
            <div className='resume__jobs__date'>{`${x.date_started} - ${x.today ? 'Presente' : x.date_finished}`}</div>
            <div className={`resume__jobs__company ${x.today ? 'resume__jobs__company--today' : ''}`}>{x.company}</div>
            <div className='resume__jobs__job'>{x.job}</div>
            <div className='resume__jobs__description'>{x.description}</div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Resume;
