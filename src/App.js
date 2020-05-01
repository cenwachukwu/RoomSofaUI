import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Router } from '@reach/router';
import axios from 'axios';

// pages
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
  const handleAddToCart = (e, product) => {
    alert('added to cart');

    const found = cartItems.find((productId) => productId._id === product._id);
    // if found is true they already in the cart[] and we dont want to add it but increase the quantity i.e. ++
    if (found) {
      product.quantity++;
      console.log('found worked');
    }
    // if not, we want to add a quality property to the product object and set it to 1
    // and then add that product to our array
    else {
      product.quantity = 1;
      setcartItems((prevState) => [...prevState, product]);
      console.log('this is the product', product);
    }
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

        <Cart path="/cart" component={Cart} cartItems={cartItems} />

        <UploadProduct path="/admin/UploadProduct" component={UploadProduct} />
      </Router>
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
