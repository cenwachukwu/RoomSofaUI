import React, { useEffect } from 'react';
import './CartItems.scss';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../actions/cartActions';

// we need to increase the price to reflect according to quantity
// we will do this in the cartItems page
// we will multiply the quantity by the product.price to display in the cart view
// product.price = product.quantity * product.price;

// we need a total:
// product.price = product.quantity * product.price;
// make a new array called product.price that consists of all [product.price = product.quantity * product.price]
// then add all the elements in the product.price array

const CartItems = (props) => {
  // console.log(props);

  const productId = props.data['*'];

  const quantity = props.data.location.search
    ? Number(props.data.location.search.split('=')[1])
    : 1;

  // getting the cart state
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  console.log(cartItems);

  const dispatch = useDispatch();

  // now that we have gotten the productId and the quantity from the props
  // we will use useEffect to make a dispatch
  // this dispatch will accept productId, quantity
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, quantity));
    }
  }, []);

  return (
    <div className="CartItems">
      <div></div>
    </div>
  );
};

export default CartItems;
