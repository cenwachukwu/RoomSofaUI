import React from 'react';
import './categoriesPage.scss';
import ProductsPils from '../../ProductsPills/ProductPill';

const SofaAndLoveseat = (props) => {
  return (
    <div className="CategoriesPage">
      <div className="CategoriesPageContainer">
        <ProductsPils data={props.ProductData} />
      </div>
    </div>
  );
};

export default SofaAndLoveseat;