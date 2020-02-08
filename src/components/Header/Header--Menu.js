import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function Menu(props) {
  return (
    <Router>
      <ul className="menu">
        {props.data.map((item, index) => (
          <li className="menu__item" key={index}>
            <Link to={item.url} className="menu__link">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </Router>
  );
}

export default Menu;
