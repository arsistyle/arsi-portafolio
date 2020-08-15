import React, { useState, useEffect } from 'react';
import { Link as Ancla } from 'react-scroll';
import { Link } from 'react-router-dom';
import { getHero } from '../services';
import '../assets/scss/style/components/Hero.scss';

const Hero = () => {
  const headerHeight = getComputedStyle(document.documentElement).getPropertyValue('--header');
  const [loading, setLoading] = useState(true);
  const [hero, setHero] = useState([]);

  useEffect(() => {
    async function loadHero() {
      const response = await getHero();
      if (response.acf) {
        setHero(response.acf);
        setLoading(false);
      }
    }
    loadHero();
  }, []);

  return (
    <section className='hero' id='inicio'>
        {loading ? (
          <div className='hero__container'>
            <div className='hero__image placeholder--child'></div>
            <div className='hero__info'>
              <div className='hero__name placeholder--child'></div>
              <div className='hero__job placeholder--child'></div>
              <div className='hero__btns'>
                <div className='hero__btn placeholder--child'></div>
                <div className='hero__btn placeholder--child'></div>
              </div>
            </div>
          </div>
        ) : (
          <div className='hero__container'>
            <div className='hero__image'>
              <img src={hero.avatar} alt={hero.name} />
            </div>
            <div className='hero__info'>
              <h1 className='hero__name'>{hero.name}</h1>
              <h2 className='hero__job'>{hero.job}</h2>
              <div className='hero__btns btn__grupo'>
                <Ancla to='proyectos' smooth={true} offset={-(Number(headerHeight.replace('px', '')) + 30)} className='hero__btn btn btn--primario btn--big'>
                  Proyectos
                </Ancla>
                <Link to='/cv' className='hero__btn btn btn--secundario btn--big btn--borde'>
                  Conóceme
                </Link>
              </div>
            </div>
          </div>
        )}
    </section>
  );
};

export default Hero;
