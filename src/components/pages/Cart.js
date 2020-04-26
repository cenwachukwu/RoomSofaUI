import React from 'react';
import Navbar from '../Navbar/navbar';
import Footer from '../Footer/footer';
import MobileNav from '../MobileNavbar/MobileNav';
import CartItems from '../CartItems/CartItems';

const Cart = (props) => {
  return (
    <div className="Cart">
      <Navbar />
      <MobileNav />
      <CartItems />
      <Footer />
    </div>
  );
};

export default Cart;
