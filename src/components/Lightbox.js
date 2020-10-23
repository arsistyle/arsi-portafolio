import React, { useState, useEffect } from 'react';
import FsLightbox from 'fslightbox-react';
import Image from './Image';

const Lightbox = ({ sources, title, backgroundColor }) => {
  const [toggler, setToggler] = useState(false);
  const [image, setImage] = useState();
  useEffect(() => {
    function loadImage() {
      if (sources.length) {
        setImage(sources);
      }
    }
    loadImage();
  }, [sources]);
  return image ? (
    <>
      <Image
        src={sources[0]}
        alt={title}
        backgroundColor={backgroundColor}
        onClick={setToggler(!toggler)}
      />
      <FsLightbox toggler={toggler} sources={sources} />
    </>
  ) : (
    <h1>Cargando</h1>
  );
};

export default Lightbox;
