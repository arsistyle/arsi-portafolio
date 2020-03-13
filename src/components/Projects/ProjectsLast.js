import React from "react";
// import ReactHtmlParser from 'react-html-parser';


import ProjectsList from "./ProjectsList";

const Projects = props => {
  return (
    <section className="projects projects--last">
      <div className="frame">
        <h2 className="text-align-center-xs">Últimos proyectos</h2>
        <ProjectsList/>
      </div>
    </section>
  );
};

export default Projects;
