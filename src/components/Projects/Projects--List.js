import React from 'react';
import useFetch from '../../hooks/useFetch';
// import ProjectItem from './Projects--Item';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';

function ProjectList(props) {
  const { loading, data: projects } = useFetch(
    'https://cinesol.cl/wp-json/wp/v2/cartelera?per_page=3'
  );
  return (
    <div className="projects">
      {loading ? (
        <h2>Cargando...</h2>
      ) : (
        <div className="proyects__list">
          <Router>
            {projects.map((item, index) => (
              <Link
                to={`/proyectos/${item.slug}`}
                className="projects__item"
                key={item.id}
              >
                <h3>{ReactHtmlParser(item.title.rendered)}</h3>
                <img src={item.fimg_url[0]} alt=""/>
              </Link>
            ))}
            {/* <Route path="/proyectos/:id" component={ProjectItem} /> */}
          </Router>
        </div>
      )}
    </div>
  );
}

export default ProjectList;
