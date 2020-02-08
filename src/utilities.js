import React from 'react';

export function ParseHTML(props) {
  let _props = props.length > 1 ? Object.keys(props).map(x => x !== 'html') : null;
  return (
    <div dangerouslySetInnerHTML={{ __html: props.html }} {..._props}></div>
  );
}