import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { getProjects } from '../services';

import '../assets/scss/style/components/Filter.scss';

const Filter = (props) => {
  const [filters, setFilters] = useState([]);

  const uniqueArray = (arr) => {
    return arr
      .filter((thing, index) => {
        const _thing = JSON.stringify(thing);
        return (
          index ===
          arr.findIndex((obj) => {
            return JSON.stringify(obj) === _thing;
          })
        );
      })
      .flat();
  };

  useEffect(() => {
    async function loadProjects() {
      const response = await getProjects();
      if (response) {
        setFilters(
          uniqueArray(
            uniqueArray(
              response.map((x) =>
                x.categorias.map((x) => ({
                  name: x.name,
                  slug: x.slug,
                  id: x.cat_ID,
                }))
              )
            )
          )
        );
      }
    }

    loadProjects();
  }, [filters]);
  return (
    <div className='filter'>
      <NavLink to='/proyectos' exact className='filter__item' activeClassName='filter__item--active'>
        Todos
      </NavLink>
      {filters.flat().map((x, i) => (
        <NavLink to={`/proyectos/${x.slug}`} exact className='filter__item' activeClassName='filter__item--active' key={i} slug={x.slug}>
          {x.name}
        </NavLink>
      ))}
    </div>
  );
};

export default Filter;
