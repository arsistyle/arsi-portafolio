import React from 'react';
import ProjectItem from './ProjectsItem';
import { ProjectsList as Data } from '../../Data';

/** ASSETS **/

// Styles
import '../../assets/scss/style/components/Projects.scss';

const ProjectsList = props => {
  return (
    <div className='projects__list'>
      {Data.map((item, index) => (
        <ProjectItem
          slug={item.slug}
          title={item.title}
          image={item.image}
          tags={item.tags}
          url={`/proyectos/${item.slug}`}
          key={index}
        />
      ))}
    </div>
  );
};

export default ProjectsList;
