import React, { useState, useEffect } from 'react';
import { getFooter } from '../services';
import { FaDribbble, FaBehance, FaLinkedin, FaGithub, Fa500Px, FaInstagram, FaWhatsapp } from 'react-icons/fa';

import '../assets/scss/style/components/Footer.scss';

const Footer = () => {
  const [loading, setLoading] = useState(true);
  const [footer, setFooter] = useState([]);

  useEffect(() => {
    async function loadFooter() {
      const response = await getFooter();
      if (response.acf) {
        setFooter(response.acf);
        setLoading(false);
      }
    }
    loadFooter();
  }, []);

  const Red = (name) => {
    switch (name) {
      case 'Dribbble':
        return <FaDribbble />;
      case 'Behance':
        return <FaBehance />;
      case 'Linkedin':
        return <FaLinkedin />;
      case 'Github':
        return <FaGithub />;
      case '500px':
        return <Fa500Px />;
      case 'Instagram':
        return <FaInstagram />;
      case 'Whatsapp':
        return <FaWhatsapp />;
      default:
        break;
    }
  };

  const RedPlaceholder = [];
  for (let i = 0; i < 6; i++) RedPlaceholder.push(<span className='footer__red footer__red--placeholder placeholder--child' key={i}></span>);

  return (
    <footer className='footer'>
      <div className='footer__top'>
        {loading ? (
          <>{RedPlaceholder}</>
        ) : (
          footer.redes.map((red, i) => (
            <a href={red.url} className='footer__red' title={red.red} key={i} target='_blank' rel='noopener noreferrer'>
              {Red(red.red)}
            </a>
          ))
        )}
      </div>
      <div className='footer__bottom'>
        <div className='frame'>{loading ? <p className='footer__copyright footer__copyright--placeholder placeholder--child'></p> : <p className='footer__copyright'>{footer.copyrights}</p>}</div>
      </div>
    </footer>
  );
};

export default Footer;
