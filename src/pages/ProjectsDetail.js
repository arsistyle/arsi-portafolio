import React from "react";
import { ProjectsList } from "../Data";

const ProjectsDetail = ({ match }) => {
  const {
    params: { slug }
  } = match;
  let item = ProjectsList.filter(x => x.slug === slug && x);
  item = item[0];
  return (
    <div className="projects__detail">
      <div className="projects__banner">
        <img src={item.image} alt={item.title} />
      </div>
      <div className="frame">
        <div className="projects__content content">
          <h1>{ item.title }</h1>
        </div>
      </div>
    </div>
  );
};

export default ProjectsDetail;
