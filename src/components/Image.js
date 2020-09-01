import React from 'react';
import { useImage } from '../Hooks';

const Image = ({ src, alt = '', className, backgroundColor = '#FFFFFF' }) => {
  const { loaded } = useImage({ src });
  return (
    <div
      className={`image ${loaded ? 'image--loaded' : ''} ${className ? className : ''}`}
      style={{ backgroundColor }}>
      <img src={`${src}`} alt={alt} />
    </div>
  );
};

export default Image;
