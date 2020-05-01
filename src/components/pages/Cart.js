import React, { useState } from 'react';
import Navbar from '../Navbar/navbar';
import Footer from '../Footer/footer';
import MobileNav from '../MobileNavbar/MobileNav';
import CartItems from '../CartItems/CartItems';

// stripe elements
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const Cart = (props) => {
  // we use loadStripe() to load our Publishable key from stripe
  //   this is how we connect our cart to our stripe accout
  const stripePromise = loadStripe(
    'pk_test_Sat61T6vGoyzQ4YheZgBF2Ww007QugdB9Q'
  );

  //   setStatus to ready
  const [status, setStatus] = useState('ready');

  //   if purchase was successfull
  if (status === 'success') {
    return <div>Congrats on your furniture purchase!</div>;
  }

  return (
    <div className="Cart">
      <Navbar />
      <MobileNav />

      {/* wrap the Cart itself in Elements to be able to use strips and set a function to change 
       the state to success */}
      <Elements stripe={stripePromise}>
        <CartItems
          data={props}
          success={() => {
            setStatus('success');
          }}
        />
      </Elements>

      <Footer />
    </div>
  );
};

export default Cart;
