import React, { useState, useEffect } from 'react';
// import { NavLink } from 'react-router-dom';
// import { Link as Ancla } from 'react-scroll';
import ScrollspyNav from 'react-scrollspy-nav';
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
      console.log(response)
    }
    loadMenu();
  }, []);

  return loading ? (
    <></>
  ) : (
    menu.count && (
      <ScrollspyNav scrollTargetIds={menu.items.map(x => x.url.replace('#', ''))} activeNavClass='menu__link--active'>
        <ul className={`header__item header__item--menu menu ${open ? 'menu--active' : ''}`}>
          {menu.items.map((x, i) => {
            return (
              x.visible && (
                <li className='menu__item' key={i}>
                  <a
                    className={`menu__link ${x.classes ? x.classes : ''} ${x.nuevo ? `menu__link--nuevo` : ''}`}
                    target={x.target}
                    href={x.url}
                    onClick={() => (responsive ? setOpen(!open) : setOpen(false))}
                  >
                    {x.title}
                  </a>
                </li>
              )
            );
          })}
        </ul>
      </ScrollspyNav>
    )
  );
};

export default Menu;
