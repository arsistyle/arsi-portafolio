import React from 'react';

export function HTML(props) {
  let _props = {...props};
  delete _props.html;
  return (
    <div
      dangerouslySetInnerHTML={{ __html: props.html }}
      {..._props}
    ></div>
  );
}