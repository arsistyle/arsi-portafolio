import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { IoIosClose, IoIosMenu } from 'react-icons/io';
import { getMenu } from '../services';

import '../assets/scss/style/components/Menu.scss';

export const MenuResponsive = ({ open, setOpen, responsive }) => {
  const Icon = () => (open ? <IoIosClose /> : <IoIosMenu />);
  return responsive ? (
    <div className={`header__item header__item--burger flex-xs oculto-lg burger ${open ? 'burger--active' : ''}`} onClick={() => setOpen(!open)}>
      <Icon />
    </div>
  ) : (
    <></>
  );
};

const Menu = ({ open, setOpen, responsive }) => {
  const [loading, setLoading] = useState(true);
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    async function loadMenu() {
      const response = await getMenu('menu-rest');
      if (response.items) {
        setMenu(response);
        setLoading(false);
      }
    }
    loadMenu();
  }, []);

  return loading ? (
    <></>
  ) : (
    menu.count && (
      <>
        <ul className={`header__item header__item--menu menu ${open ? 'menu--active' : ''}`}>
          {menu.items.map((x, i) => {
            return (
              x.visible && (
                <li className='menu__item' key={i}>
                  <NavLink
                    exact={x.title === 'Inicio' ? true : false}
                    className={`menu__link ${x.classes ? x.classes : ''} ${x.nuevo ? `menu__link--nuevo` : ''}`}
                    activeClassName='menu__link--active'
                    target={x.target}
                    to={x.path}
                    onClick={() => (responsive ? setOpen(!open) : setOpen(false))}
                  >
                    {x.title}
                  </NavLink>
                </li>
              )
            );
          })}
        </ul>
      </>
    )
  );
};

export default Menu;
