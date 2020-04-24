import React from 'react';
import Navbar from '../Navbar/navbar';
import Footer from '../Footer/footer';
import ProductInfo from '../ProductInfo/ProductInfo';

const ProductPage = (props) => {
  return (
    <div className="ProductPage">
      <Navbar />
      <ProductInfo />
      <Footer />
    </div>
  );
};

export default ProductPage;
