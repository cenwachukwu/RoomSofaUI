import React, { useEffect } from 'react';
import './ProductPill.scss';
import image from '../../utils/homepills/loveseat.jpg';
import { Link } from '@reach/router';
import MobileNav from '../MobileNavbar/MobileNav';

const ProductsPils = (props) => {
  const productData = props.data;
  console.log(productData);

  return (
    <div className="ProductsPils">
      {productData ? (
        <div className="productsPilsContainer">
          <Link to={`/productPage/${productData._id}`}>
            <img src={image} />
          </Link>
          <Link to={`/productPage/${productData._id}`}>
            <p className="productsPilsContainerName">{productData.name}</p>
          </Link>
          <Link to={`/productPage/${productData._id}`}>
            <p>${productData.price / 100}</p>
          </Link>
        </div>
      ) : (
        <div>
          <p>
            This product is coming soon but while you are here check out other
            products
          </p>
        </div>
      )}
    </div>
  );
};

export default ProductsPils;
