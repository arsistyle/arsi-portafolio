import React from 'react';
import { Link } from 'react-router-dom';
import withBreadcrumbs from 'react-router-breadcrumbs-hoc';

const Breadcrumbs = ({ breadcrumbs }) => {
    // console.log(breadcrumbs)
  return (
    <div className='breadcrumbs'>
      {breadcrumbs.map(({ breadcrumb, match }, index) => {
        // console.log(breadcrumb, match);
        return (
          <Link
            to={match.url || ''}
            key={match.url}
            className='breadcrumbs__link'
          >
            {breadcrumb}
          </Link>
        );
      })}
    </div>
  );
};

export default withBreadcrumbs()(Breadcrumbs);
