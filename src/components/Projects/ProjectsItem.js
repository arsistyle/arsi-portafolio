import React, { useState } from "react";
// import ReactHtmlParser from 'react-html-parser';

function ProjectItem(props) {
  const [loading, setImage] = useState(false);
  const image = new Image();
  image.src = props.image;
  image.onload = () => {
    setImage(true);
  };
  console.log(props);
  return (
    <>
      {!loading ? (
        <>
          <div className="projects__image placeholder"></div>
          <div className="projects__info">
            <div className="projects__title placeholder"></div>
          </div>
        </>
      ) : (
        <>
          <div className="projects__image">
            <img src={props.image} alt={props.name} />
          </div>
          <div className="projects__info">
            <h3 className="projects__title">{props.title}</h3>
            <div className="projects__tags">
              {props.tags.map((x, i) => (
                <span className="projects__tags__item" key={i}>
                  {x}
                </span>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default ProjectItem;
