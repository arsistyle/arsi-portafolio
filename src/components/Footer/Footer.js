//DATA
import { Global } from '../../Data';

import React from 'react';
import RRSS from './Footer--RRSS';

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
