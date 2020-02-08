import React from 'react';
import { ParseHTML } from '../../utilities';

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
          <ParseHTML html={red.icon}/>
        </a>
      ))}
    </div>
  );
}

export default RRSS;
