import React from 'react';
import Navbar from '../Navbar/navbar';
import Footer from '../Footer/footer';
import MobileNav from '../MobileNavbar/MobileNav';
import CartItems from '../CartItems/CartItems';

// stripe elements
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const Cart = (props) => {
  // we use loadStripe() to load our Publishable key from stripe
  const stripePromise = loadStripe(
    'pk_test_Sat61T6vGoyzQ4YheZgBF2Ww007QugdB9Q'
  );

  return (
    <div className="Cart">
      <Navbar />
      <MobileNav />

      <CartItems data={props} />

      <Footer />
    </div>
  );
};

export default Cart;
