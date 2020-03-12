// Data
import { Global } from "../../Data";

import React from "react";
import { Link } from "react-router-dom";
import Menu from "../Menu";

/** ASSETS **/

// Styles
import "../../assets/scss/style/components/Header.scss";

function Header(props) {
  return (
    <header className="header">
      <Link to="/" className="header__item header__item--logo">
        <img src={props.logo} alt={Global.title} />
      </Link>
      <div className="header__item header__item--menu">
        <Menu data={props.menu} />
      </div>
    </header>
  );
}

export default Header;
