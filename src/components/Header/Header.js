// Data
import { Global } from '../../Data';

import React from 'react';
import { NavLink } from 'react-router-dom';

/** ASSETS **/

// Styles
import '../../assets/scss/style/components/Header.scss';

function Header(props) {
  return (
    <header className="header">
      <NavLink to="/" className="header__item header__item--logo">
        <img src={props.logo} alt={Global.title} />
      </NavLink>
      <div className="header__item header__item--menu">
        <ul className="menu">
          {props.menu.map((item, index) => (
            <li className="menu__item" key={index}>
              <NavLink
                exact
                to={item.url}
                className="menu__link"
                activeClassName="menu__link--active"
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Header;
