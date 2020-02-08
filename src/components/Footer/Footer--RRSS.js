import React from 'react';
import { HTML } from '../../utilities';

function RRSS(props) {
  return (
    <div className="footer__rrss">
      {props.rrss.map((red, key) => (
        <a
          href={red.url}
          className="footer__red"
          title={red.label}
          target="_blank"
          rel="noopener noreferrer"
          key={key}
        >
          <HTML html={red.icon} className="ass" cacaa="asdsad"/>
        </a>
      ))}
    </div>
  );
}

export default RRSS;
