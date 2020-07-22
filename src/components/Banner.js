import React from 'react';
import '../assets/scss/style/components/Banner.scss';

const Banner = (props) => {
  const { img } = props;
  return (
    <div className='banner' style={
      {
        backgroundImage: `url(${img})`
      }
    }>
    </div>
  );
};

export default Banner;
