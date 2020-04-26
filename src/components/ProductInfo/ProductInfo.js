import React from 'react';
import './ProductInfo.scss';
import sectional from '../../utils/homepills/sectional.jpg';
import MobileNav from '../MobileNavbar/MobileNav';

const ProductInfo = (props) => {
  const productData = props.data.ProductData.data;
  // console.log(productData);

  const productId = props.data.productid;
  // console.log(productId);

  return (
    <div className="ProductInfo">
      {productData ? (
        <div>
          {productData.map((product, index) => {
            // console.log(product);
            if (productId === product._id) {
              return (
                <div className="ProductInfoContainer" key={index + 0}>
                  <div className="productPictures">
                    <img src={sectional} />
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  </div>

                  <div className="productInfoSection">
                    <h1>{product.name}</h1>
                    <p className="productPrice">${product.price}</p>

                    <button>Add to cart</button>

                    <p className="productDescription">{product.description}</p>
                    <input type="file" id="fileInput" />

                    {product.dimension.length ? (
                      <div>
                        {product.dimension.map((dimension, index) => {
                          return (
                            <div key={index + 0}>
                              <p className="productDimension">
                                Dimensions:{' '}
                                <span>
                                  {dimension.product_type} :{' '}
                                  {dimension.product_dimension}
                                </span>
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    ) : null}

                    {product.features.length ? (
                      <div>
                        {product.features.map((feature, index) => {
                          // console.log(feature);
                          return (
                            <div key={index + 0}>
                              <p>features : {feature.feature}</p>
                            </div>
                          );
                        })}
                      </div>
                    ) : null}

                    {product.isFreeShipping ? (
                      <div>
                        <p>Free Shipping to the DMV</p>
                      </div>
                    ) : (
                      <p>We only ship to the DMV</p>
                    )}

                    {product.isSoldOut ? (
                      <div>
                        <p>This product is soldout</p>
                      </div>
                    ) : null}

                    <p>Question and answer???</p>

                    <p>love</p>
                    <p>Style no : {product.styleNumber}</p>
                    <p>
                      Do you have questions about this product? Our experts are
                      here to help! call us ish
                    </p>
                    <p>Box spring require true or false</p>
                  </div>
                </div>
              );
            }
          })}
        </div>
      ) : (
        <p>Product not available</p>
      )}
    </div>
  );
};

export default ProductInfo;
