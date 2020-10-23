import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { IoIosClose, IoIosMenu } from 'react-icons/io';
import { getMenu } from '../services';

import '../assets/scss/style/components/Menu.scss';

const Menu = ({ open, setOpen, responsive }) => {
  const [loading, setLoading] = useState(true);
  const [menu, setMenu] = useState([]);
  const [currentWidth, setCurrentWidth] = useState(false);

  useEffect(() => {
    async function loadMenu() {
      const response = await getMenu('menu-rest');
      if (response.items) {
        setMenu(response);
        setLoading(false);
      }
      responsive ? setCurrentWidth(false) : setCurrentWidth(true);
    }
    loadMenu();
  }, [responsive]);

  return loading ? (
    <></>
  ) : (
    menu.count &&
      (currentWidth ? (
        <ul className='header__item header__item--menu menu'>
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
      ) : (
        <div className={`menu-responsive ${open ? 'menu-responsive--active' : ''}`}>
          <ul className='menu-responsive__lista'>
            {menu.items.map((x, i) => {
              return (
                x.visible && (
                  <li className='menu-responsive__item' key={i}>
                    <NavLink
                      exact={x.title === 'Inicio' ? true : false}
                      className={`menu-responsive__link ${x.classes ? x.classes : ''} ${x.nuevo ? `menu-responsive__link--nuevo` : ''}`}
                      activeClassName='menu-responsive__link--active'
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
          <svg className='menu-responsive__shape' xmlns='http://www.w3.org/2000/svg' width='536' height='409' viewBox='0 0 536.4 409.1'>
            <path d='M530.1 345.6L340.2 38.3C325.5 14.5 299.5 0 271.5 0c-27.9 0-53.8 14.4-68.6 38.1l-68.7 110.3 -75-36.3C38.4 102 13.4 111.2 4 132.3l-0.5 1.2c-8.9 20.1-0.2 43.7 19.6 53.3L90.2 219 12.5 343.8c-11.7 18.8-6.7 43.4 11.5 56.1l0.5 0.3c19.7 13.8 46.9 8.1 59.4-12.4l81.1-132.9 308.3 148.2c13.2 7.9 30.3 8.3 44.1-0.7v0C536.4 390.1 542.1 364.8 530.1 345.6zM235.5 139.2c16.2-26.6 54.9-26.6 71.1 0l80.2 131.4 -178.7-86.5L235.5 139.2z' />
          </svg>
        </div>
      ))
  );
};

export const BurgerIcon = ({ open, setOpen, responsive }) => {
  const Icon = () => (open ? <IoIosClose /> : <IoIosMenu />);
  const [currentWidth, setCurrentWidth] = useState(false);
  useEffect(() => {
    responsive ? setCurrentWidth(true) : setCurrentWidth(false);
  }, [currentWidth, responsive]);
  return (
    currentWidth && (
      <div className={`header__item header__item--burger flex-xs oculto-lg burger ${open ? 'burger--active' : ''}`} onClick={() => setOpen(!open)}>
        <Icon />
      </div>
    )
  );
};

export default Menu;
