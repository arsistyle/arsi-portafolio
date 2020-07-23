import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';
import { getPage } from '../services';
import Banner from '../components/Banner';
import { SectionContact } from '../components/Sections';
import Breadcrumb from '../components/Breadcrumbs';

import '../assets/scss/style/components/Page.scss';

const Single = (props) => {
  const { slug, component: Component, extra } = props;
  const [loading, setLoading] = useState(true);
  const [single, setSingle] = useState([]);
  const options = {
    items: [
      { to: '/', label: 'Inicio' },
      { to: '/proyectos', label: 'Inicio' },
      { to: `/proyectos/${slug}`, label: single.title, active: true },
    ],
  };
  useEffect(() => {
    async function loadSingle() {
      const response = await getPage(slug);
      if (response) {
        setSingle(response[0]);
        // setLoading(false);
      }
    }
    loadSingle();
  }, [slug]);
  return (
    !loading && (
      <div className='page'>
        <Banner img={single.thumbnail} />
        <div className='container-fluid'>
          <div className='frame'>
            <div className='page__content'>
              <header className='page__content__header'>
                <Breadcrumb separator={<IoIosArrowForward />}>
                  {options.items.map(({ to, label, active }) => {
                    return <Link className={`breadcrumbs__link ${active && `breadcrumbs__link--active`}`} key={to} to={to} dangerouslySetInnerHTML={{ __html: label }}></Link>;
                  })}
                </Breadcrumb>
                <h1>{single.title}</h1>
              </header>
            </div>
          </div>
        </div>
        <SectionContact />
      </div>
    )
  );
};

export default Single;
