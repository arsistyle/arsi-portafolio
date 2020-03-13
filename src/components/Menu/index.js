import React from "react";
import { NavLink } from "react-router-dom";

import "../../assets/scss/style/components/Menu.scss";

function Menu(props) {
  return (
    <ul className="menu">
      {props.data.map((item, index) => (
        <li className="menu__item" key={index}>
          <NavLink
            exact={item.url === "/" ? true : false}
            to={item.url}
            className="menu__link"
            activeClassName="menu__link--active"
          >
            {item.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default Menu;
