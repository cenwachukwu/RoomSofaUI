import React from 'react';
import './carrousel.scss';
import tempPics from '../../utils/carrousel.jpg';

const Carrousel = () => {
  return (
    <div className="tempCarrouselPic">
      <img title="tempImg" alt="Cozi Sofa" src={tempPics} />
    </div>
  );
};

export default Carrousel;
