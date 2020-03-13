import React from 'react';
import { ProjectsList } from '../Data';
import Page from '../components/Page';

const ProjectsDetail = ({ match }) => {
  const {
    params: { slug }
  } = match;
  let item = ProjectsList.filter(x => x.slug === slug && x);
  item = item[0];

  const Project = () => {
    return (
    <h1>{item.title}</h1>
    );
  };

  return <Page banner={item.banner} content={Project} />;
};

export default ProjectsDetail;
