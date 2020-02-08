//DATA
import { Global } from '../../data/Global';

import React from 'react';
import RRSS from './Footer--RRSS';
import './Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <RRSS rrss={Global.rrss} />
      </div>
    </footer>
  );
}

export default Footer;
