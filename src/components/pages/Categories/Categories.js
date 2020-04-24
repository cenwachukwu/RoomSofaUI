import React from 'react';
import './Categories.scss';
import Sidebar from '../../Sidebar/Sidebar';
import ProductsPils from '../../ProductsPills/ProductPill';
import Footer from '../../Footer/footer';

const Categories = (props) => {
  return (
    <div className="Categories">
      <div className="categoriesContainer">
        <Sidebar />
        <ProductsPils data={props.ProductData} />
      </div>
      <Footer />
    </div>
  );
};

export default Categories;
