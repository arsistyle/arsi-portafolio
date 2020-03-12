import React from "react";
import { Link } from "react-router-dom";
// import ReactHtmlParser from 'react-html-parser';
import LazyLoad from "react-lazyload";

import ProjectItem from "../components/Projects/ProjectsItem";

import { ProjectsList } from "../Data";

/** ASSETS **/

// Styles
import "../assets/scss/style/components/Projects.scss";

const Projects = props => {
  return (
    <section className="projects">
      <div className="frame">
        <div className="projects__list">
          {ProjectsList.map((item, index) => (
            <LazyLoad key={index}>
              <Link to={`/proyectos/${item.slug}`} className="projects__item">
                <ProjectItem
                  slug={item.slug}
                  title={item.title}
                  image={item.image}
                  tags={item.tags}
                />
              </Link>
            </LazyLoad>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
