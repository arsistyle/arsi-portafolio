import React from 'react';
import '../assets/scss/style/components/Banner.scss';

const Banner = (props) => {
  const { img, animated, color } = props;
  return (
    <div className={`banner ${animated ? 'banner--animated' : ''}`} style={
      {
        backgroundImage: img && `url(${img})`,
        backgroundColor: color,
      }
    }>
    </div>
  );
};

export default Banner;
