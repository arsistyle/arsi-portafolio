import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';
import { getPage } from '../services';
import { HTML } from '../functions';
import Seo from './Seo';
import Home from '../components/Pages--home';
import Banner from '../components/Banner';
import { SectionContact } from '../components/Sections';
import Breadcrumb from '../components/Breadcrumbs';

import '../assets/scss/style/components/Page.scss';

const Pages = (props) => {
  const { slug, component: Component, page_extra } = props;
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState([]);
  const [extras] = useState({});
  const [options, setOptions] = useState({});
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
        setOptions({
          items: [
            { to: '/', label: 'Inicio' },
            { to: `/${slug}`, label: response[0].title, active: true },
          ],
        });
      }
    }
    loadPage();
  }, [slug, page_extra, extras]);
  return slug === 'inicio' ? (
    !loading && (
      <>
        <Seo
          title={page.acf.title}
          description={page?.acf?.description}
          url={page.link.replace('//admin.', '//').replace('/inicio', '')}
          og={{
            title: page?.acf?.title
              ? page.acf?.title
              : `Israel Larrondo | ${page.title}`,
            description: page?.acf?.description,
            url: page.link.replace('//admin.', '//').replace('/inicio', ''),
            type: page?.acf?.type,
            image: page?.acf?.image,
          }}
        />
        <Home />
      </>
    )
  ) : !loading ? (
    <div className='page'>
      <Seo
        title={
          page?.acf?.title ? page.acf.title : `Israel Larrondo | ${page.title}`
        }
        description={page?.acf?.description}
        url={page.link.replace('//admin.', '//')}
        og={{
          title: page?.acf?.title
            ? page.acf?.title
            : `Israel Larrondo | ${page.title}`,
          description: page?.acf?.description,
          url: page.link.replace('//admin.', '//'),
          type: page?.acf?.type,
          image: page?.acf?.image,
        }}
      />
      <Banner img={page.thumbnail} animated={page.acf.bg_animated} />
      <div className='container-fluid'>
        <div className='frame'>
          <div className='page__content'>
            <header className='page__content__header'>
              <Breadcrumb separator={<IoIosArrowForward />}>
                {options?.items?.map(({ to, label, active }) => {
                  return (
                    <Link
                      className={`breadcrumbs__link ${
                        active && `breadcrumbs__link--active`
                      }`}
                      key={to}
                      to={to}
                    >
                      {HTML(label)}
                    </Link>
                  );
                })}
              </Breadcrumb>
              <h1>{HTML(page.title)}</h1>
            </header>
            <section
              className={`page__content__inside ${
                page.acf.overlap && 'page__content__overlap'
              }`}
            >
              <Component
                {...extras}
                page={page}
                content={page.content.rendered}
              />
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
