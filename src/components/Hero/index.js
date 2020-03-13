import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Hero as DataHero } from '../../Data';

import '../../assets/scss/style/components/Hero.scss';

const Hero = () => {
  const [loading, setImage] = useState(false);
  const image = new Image();
  image.src = DataHero.avatar;
  image.onload = () => {
    setImage(true);
  };
  return (
    <section className='hero'>
      <div className='frame'>
        {loading ? (
          <div className='hero__container'>
            <div className='hero__image'>
              <img src={DataHero.avatar} alt={DataHero.name} />
            </div>
            <div className='hero__info'>
              <h1 className='hero__name'>{DataHero.name}</h1>
              <h2 className='hero__job'>{DataHero.job}</h2>
              <div className='hero__btns btn__grupo'>
                {DataHero.btns.map((x, i) => (
                  <Link {...x.props} key={i}>
                    {x.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className='hero__container'>
            <div className="hero__image placeholder--child"></div>
            <div className="hero__info">
              <div className="hero__name placeholder--child"></div>
              <div className="hero__job placeholder--child"></div>
              <div className="hero__btns">
                <div className="hero__btn placeholder--child"></div>
                <div className="hero__btn placeholder--child"></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
