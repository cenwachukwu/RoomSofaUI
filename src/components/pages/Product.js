import React from 'react';
import Navbar from '../Navbar/navbar';
import Footer from '../Footer/footer';
import ProductInfo from '../ProductInfo/ProductInfo';
import MobileNav from '../MobileNavbar/MobileNav';

const ProductPage = (props) => {
  return (
    <div className="ProductPage">
      <Navbar />
      <MobileNav />
      <ProductInfo data={props} />
      <Footer />
    </div>
  );
};

export default ProductPage;
