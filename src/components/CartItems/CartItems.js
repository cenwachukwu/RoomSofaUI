import React from 'react';
import './CartItems.scss';
import axios from 'axios';

import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

const CartItems = (props, { success }) => {
  console.log(props.data.cartItems);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    // if no error, we will post this to the backend to charge the person using axios
    // if (!error) {
    //   const { id } = paymentMethod;

    //   const url = "tbd"

    //   try {
    //     const { data } = await axios.post(url, { id, amount: 1099 });
    //     console.log(data);
    // if (!data.ok) {
    //     throw Error(data.statusText);
    //   }
    //     success();
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }
  };

  return (
    <div className="CartItems">
      <form
        onSubmit={handleSubmit}
        style={{ width: '400px', margin: '0 auto' }}
      >
        <h2>Price: $10.99 USD</h2>
        <img
          src="https://images.ricardocuisine.com/services/recipes/500x675_7700.jpg"
          style={{ maxWidth: '50px' }}
        />

        <CardElement />

        <button type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
    </div>
  );
};

export default CartItems;
