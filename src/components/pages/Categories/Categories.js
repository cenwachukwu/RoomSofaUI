import React from 'react';
import './Categories.scss';
import Sidebar from '../../Sidebar/Sidebar';
import ProductsPils from '../../ProductsPills/ProductPill';

const Categories = (props) => {
  return (
    <div className="Categories">
      <div className="categoriesContainer">
        <Sidebar />
        <ProductsPils />
      </div>
    </div>
  );
};

export default Categories;
