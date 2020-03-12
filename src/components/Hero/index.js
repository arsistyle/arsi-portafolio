import React from 'react';

import { Hero as DataHero } from '../../Data';

import '../../assets/scss/style/components/Hero.scss';

const Hero = () => {
  return (
    <section className="hero">
      <div className="frame">
        <div className="hero__container">
          <div className="hero__image">
            <img src={DataHero.avatar} alt={DataHero.name} />
          </div>
          <div className="hero__info">
            <h1 className="hero__name">{DataHero.name}</h1>
            <h2 className="hero__job">{DataHero.job}</h2>
            <div className="btn__grupo">
              {DataHero.btns.map((x, i) => (
                <a {...x.props} key={i}>
                  {x.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
