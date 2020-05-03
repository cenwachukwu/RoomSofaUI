import React, { useState } from 'react';
import '../Categories.scss';
import ProductsPils from '../../ProductsPills/ProductPill';

const AccentChair = (props) => {
  return (
    <div className="CategoriesPage">
      {categoriesProps ? (
        <div className="CategoriesPageContainer">
          {categoriesProps.map((product, index) => {
            if (product.category == 'Chair') {
              // console.log(product);
              return (
                <div key={index + 0}>
                  <ProductsPils data={product} />
                </div>
              );
            }
          })}
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

export default AccentChair;
