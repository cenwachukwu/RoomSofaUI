import React, { useEffect } from 'react';
import './CartItems.scss';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../actions/cartActions';

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

  const qty = [0, 1, 2, 3];

  const checkoutHandler = () => {
    alert('checkout');
    // props.history.push("/signin?redirect=shipping");
  };

  const removeFromCartHandler = (productId) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <div className="CartItems">
      <div className="CartItemsContainer">
        <div className="CartItemsHeader">
          <h1>My Cart</h1>
        </div>
        {cartItems.length === 0 ? (
          <div>
            <p>Cart is empty</p>
          </div>
        ) : (
          <div className="CartDivCheckout">
            <div className="CartDiv">
              {cartItems.map((product, index) => {
                return (
                  <div key={index} className="prodInCart">
                    <div className="productImage">
                      <img src={product.image[0].image} />
                    </div>
                    <div className="productInfoDiv">
                      <div className="productNameDiv">
                        <div className="productInfoName">
                          <p>{product.name}</p>
                        </div>
                        <div className="productInfoBrand">
                          <p>
                            by {product.brand[0].brandName} |{' '}
                            {product.brand[0].productId}
                          </p>
                        </div>
                        <div className="productFreeShipping">
                          <p>Free shipping within the DMV</p>
                        </div>
                      </div>
                      <div className="priceContainerDiv">
                        <div className="productPrice">
                          <p className="productPriceQty">
                            ${(product.price * product.quantity) / 100}{' '}
                          </p>
                          <p className="productPriceItem">
                            ${product.price / 100} per item
                          </p>
                        </div>
                        <div className="productQtyPrice">
                          <select
                            value={product.quantity}
                            onChange={(e) =>
                              dispatch(
                                addToCart(product.product, e.target.value)
                              )
                            }
                          >
                            {qty.map((x) => (
                              <option key={x + 1} value={x + 1}>
                                {x + 1}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="removeButtonDiv">
                          <button
                            onClick={() =>
                              removeFromCartHandler(product.product)
                            }
                            className="removeButton"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="CheckoutDiv">
              <div className="CheckoutSubtotalDiv">
                <h2 className="CheckoutSubtotalHeader">
                  Item Subtotal : ${' '}
                  {cartItems.reduce(
                    (a, c) => a + (c.price * c.quantity) / 100,
                    0
                  )}
                </h2>
              </div>

              <div className="checkoutButtonDiv">
                <button
                  onClick={checkoutHandler}
                  className="checkoutButton"
                  disabled={cartItems.length === 0}
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartItems;
