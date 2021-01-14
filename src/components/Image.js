import React from 'react';
import { useImage } from '../Hooks';

const Image = ({
  src,
  alt = '',
  className,
  srcset = null,
  sizes = null,
  backgroundColor = 'rgba(214,227,255,.3)',
  onClick,
}) => {
  const { loaded } = useImage({ src });
  return loaded ? (
    <div
      className={`image ${loaded ? 'image--loaded' : ''} ${
        className ? className : ''
      }`}
      style={{ backgroundColor: !loaded && backgroundColor }}
    >
      <img src={src} alt={alt} srcSet={srcset} sizes={sizes} />
    </div>
  ) : (
    <div className='image--placeholder placeholder--child'></div>
  ); 
  
};

export default Image;
