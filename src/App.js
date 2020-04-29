import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Router } from '@reach/router';
import axios from 'axios';
import Home from './components/pages/Home';
import Categories from './components/pages/Categories/Categories';
import ProductPage from './components/pages/Product';
import UploadProduct from './components/UploadProduct/UploadProduct';
import Cart from './components/pages/Cart';

const App = () => {
  const [productData, setProductData] = useState({ products: [] });
  const [cartItems, setcartItems] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8080/products')
      .then((res) => {
        // console.log(res);
        const Product = res.data;
        setProductData(Product);
      })
      .catch((err) => {
        console.log(err);
      });
    // because We only want to fetch data when the component mounts.
    // That's why you can provide an empty array as second argument to the effect hook to avoid activating it
    // on component updates but only for the mounting of the component.
  }, []);

  // make sure the add cart function adds each product once and increases the quantity
  const cartItemQuantities = (items) => {
    return items.reduce((acc, item) => {
      // _item and item are not the same, we use _item as a shadow to compare to item to see it they are the same
      // if they are that means they already in the cart[] and we dont want to add it but increase the quantity i.e. ++
      // we use _id but we might change it to the sku id thing
      const found = acc.find((_item) => _item._id === item._id);
      if (found) {
        found.quantity++;
      } else {
        acc.push({
          quantity: 1,
          ...item,
        });
      }
      return acc;
    }, []);
  };

  // add to cart function
  const handleAddToCart = (e, product) => {
    alert('added to cart');
    console.log(product);
    setcartItems((prevState) => [...prevState, product]);
  };

  // remove item from cart function
  const removeItemFromCart = (e, product) => {
    alert('Item Removed');
  };

  return (
    <React.StrictMode>
      <Router>
        <Home path="/" exact component={Home} />
        <Categories
          path="/categories"
          component={Categories}
          ProductData={productData}
        />
        <ProductPage
          path="/productPage/:productid"
          component={ProductPage}
          ProductData={productData}
          handleAddToCart={handleAddToCart}
        />
        <UploadProduct path="/admin/UploadProduct" component={UploadProduct} />
        <Cart path="/cart" component={Cart} cartItems={cartItems} />
      </Router>
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
