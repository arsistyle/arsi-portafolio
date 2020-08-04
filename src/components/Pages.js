import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';
import { getPage } from '../services';
import Banner from '../components/Banner';
import { SectionContact } from '../components/Sections';
import Breadcrumb from '../components/Breadcrumbs';

import '../assets/scss/style/components/Page.scss';

const Pages = (props) => {
  const { slug, component: Component, page_extra } = props;
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState([]);
  const [extras] = useState({});
  const options = {
    items: [
      { to: '/', label: 'Inicio' },
      { to: '/proyectos', label: 'Proyectos', active: true },
    ],
  };
  useEffect(() => {
    async function loadPage() {
      const response = await getPage(slug);
      if (response) {
        setPage(response[0]);
        for (const key in page_extra) {
          const el = page_extra[key];
          extras[el.property] = el.value;
        }
        setLoading(false);
      }
    }
    loadPage();
  }, [slug, page_extra, extras]);
  return !loading ? (
    <div className='page'>
      <Banner img={page.thumbnail} animated={page.acf.bg_animated} />
      <div className='container-fluid'>
        <div className='frame'>
          <div className='page__content'>
            <header className='page__content__header'>
              <Breadcrumb separator={<IoIosArrowForward />}>
                {options.items.map(({ to, label, active }) => {
                  return <Link className={`breadcrumbs__link ${active && `breadcrumbs__link--active`}`} key={to} to={to} dangerouslySetInnerHTML={{ __html: label }}></Link>;
                })}
              </Breadcrumb>
              <h1>{page.title}</h1>
            </header>
            <section className={`page__content__inside ${page.acf.overlap && 'page__content__overlap'}`}>
              <Component {...extras} page={page} />
            </section>
          </div>
        </div>
      </div>
      {page.acf['seccion_contacto'] && <SectionContact />}
    </div>
  ) : (
    <div className='page'>
      <div className='banner banner--placeholder placeholder--child' />
      <div className='container-fluid'>
        <div className='frame'>
          <div className='page__content'>
            <header className='page__content__header'>
              <div className='breadcrumbs'>
                <div className='breadcrumbs__item breadcrumbs__item--placeholder placeholder--child'></div>
                <div className='breadcrumbs__item breadcrumbs__item--placeholder placeholder--child'></div>
              </div>
              <div className='page__title--placeholder placeholder--child'></div>
            </header>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pages;
