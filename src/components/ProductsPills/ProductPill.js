import React, { useEffect } from 'react';
import './ProductPill.scss';
import image from '../../utils/homepills/loveseat.jpg';
import { Link } from '@reach/router';

const ProductsPils = (props) => {
  console.log(props.data.data);

  return (
    <div className="ProductsPils">
      <div className="productsPilsContainer">
        <div className="pilsContainers">
          <Link to="/productPage">
            <img src={image} />
          </Link>
          <Link to="/productPage">
            <p>Name</p>
          </Link>
          <Link to="/productPage">
            <p>Price</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductsPils;
