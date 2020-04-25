import React, { useEffect } from 'react';
import './ProductPill.scss';
import image from '../../utils/homepills/loveseat.jpg';
import { Link } from '@reach/router';
import MobileNav from '../MobileNavbar/MobileNav';

const ProductsPils = (props) => {
  const productData = props.data.data;
  console.log(productData);

  return (
    <div className="ProductsPils">
      <MobileNav />
      {productData ? (
        <div className="productsPilsContainer">
          {productData.map((product, index) => {
            console.log(product);
            return (
              <div key={index + 0} className="pilsContainers">
                <Link to="/productPage">
                  <img src={image} />
                </Link>
                <Link to="/productPage">
                  <p>{product.name}</p>
                </Link>
                <Link to="/productPage">
                  <p>${product.price}</p>
                </Link>
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default ProductsPils;
