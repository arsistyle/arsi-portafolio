import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';
import { getPage } from '../services';
import Banner from '../components/Banner';
import { SectionContact } from '../components/Sections';
import Breadcrumb from '../components/Breadcrumbs';

import '../assets/scss/style/components/Page.scss';

const Pages = (props) => {
  console.log(props);
  const { slug, component: Component, extra } = props;
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState([]);
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
        setLoading(false);
        console.log(response[0])
      }
    }
    loadPage();
  }, [slug]);
  return (
    !loading && (
      <div className='page'>
        <Banner img={page.thumbnail} />
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
              <div className='page__content__overlap'>
                <Component {...extra} content={page.content}/>
              </div>
            </div>
          </div>
        </div>
        {page.acf['seccion_contacto'] && <SectionContact />}
      </div>
    )
  );
};

export default Pages;
