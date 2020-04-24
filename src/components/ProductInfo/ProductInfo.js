import React from 'react';
import './ProductInfo.scss';
import sectional from '../../utils/homepills/sectional.jpg';

const ProductInfo = (props) => {
  return (
    <div className="ProductInfo">
      <div className="ProductInfoContainer">
        <div className="productPictures">
          <img src={sectional} />
          <div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="productInfoSection">
          <h1>Name</h1>
          <p>Price</p>
          <p>Description</p>
          <input type="file" id="fileInput" />
          <p>features</p>
          <p>Product Details</p>
          <p>Upholstered</p>
          <p>Natural Variation</p>
          {/* see more? */}
          <p>Shipping and returns</p>
          <p>Question and answer</p>
          <p>Add to cart</p>
          <p>Weight and Dimension</p>
          <p>love</p>
          <p>Style Number</p>
          <p>
            Do you have questions about this product? Our experts are here to
            help! call us ish
          </p>
          <p>Box spring require true or false</p>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
