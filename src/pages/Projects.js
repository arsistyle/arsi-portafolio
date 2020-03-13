import React from 'react';
import Page from '../components/Page';
import Filter from '../components/Filter';
import { ProjectsList as ProjectsInfo } from '../Data';
// import ReactHtmlParser from 'react-html-parser';

import ProjectsList from '../components/Projects/ProjectsList';

const Projects = props => {
  let filters = ProjectsInfo.map(x => x.tags);
  filters = filters.flat();
  const PageProjects = () => {
    return (
      <>
        <h1>Proyectos</h1>
        <Filter filters={filters} />
        <div className='page__content__overlap'>
          <ProjectsList />
        </div>
      </>
    );
  };
  return <Page content={PageProjects} />;
};

export default Projects;
