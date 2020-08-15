import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCurrentWitdh } from '../Hooks';
import Menu, { BurgerIcon } from './Menu';
import Bg from './Bg';
import Logo from '../assets/img/logo.svg';
import '../assets/scss/style/components/Header.scss';

const Header = () => {
  const [open, setOpen] = useState(false);
  const currentWidth = useCurrentWitdh();
  const [width, setWidth] = useState(false);
  useEffect(() => {
    currentWidth < 992 ? setWidth(true) : setWidth(false);
  }, [currentWidth]);
  return (
    <header className='header'>
      <Link to='/' className='header__item header__item--logo'>
        <img src={Logo} alt='' />
      </Link>
      <BurgerIcon open={open} setOpen={setOpen} responsive={width} />
      <Bg open={open} setOpen={setOpen} responsive={width} />
      <Menu open={open} setOpen={setOpen} responsive={width} />
    </header>
  );
};

export default Header;
