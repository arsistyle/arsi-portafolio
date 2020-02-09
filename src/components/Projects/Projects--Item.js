import React from 'react';
import ReactHtmlParser from 'react-html-parser';

function ProjectItem(props) {
  const content = ReactHtmlParser(props.content)[0];
  console.log(content);
  return (
    <div className="projects__item">
      {ReactHtmlParser(content)}
    </div>
  );
}

export default ProjectItem;
