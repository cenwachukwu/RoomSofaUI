import React, { useEffect } from 'react';
import './CartItems.scss';
import axios from 'axios';

import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

// we need to increase the price to reflect according to quantity
// we will do this in the cartItems page
// we will multiply the quantity by the product.price to display in the cart view
// product.price = product.quantity * product.price;

// we need a total:
// product.price = product.quantity * product.price;
// make a new array called product.price that consists of all [product.price = product.quantity * product.price]
// then add all the elements in the product.price array

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
