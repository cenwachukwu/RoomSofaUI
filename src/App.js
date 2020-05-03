import React, { useEffect, useState, useReducer } from 'react';
import ReactDOM from 'react-dom';
import { Router } from '@reach/router';
import axios from 'axios';

// pages
import Home from './components/pages/Home';
import Categories from './components/pages/Categories/Categories';
import ProductPage from './components/pages/Product';
import UploadProduct from './components/UploadProduct/UploadProduct';
import Cart from './components/pages/Cart';
import AccentChair from './components/Categories/categoriesPages/AccentChair';
import Chair from './components/Categories/categoriesPages/Chair';
import Recliner from './components/Categories/categoriesPages/Recliner';
import Sectionals from './components/Categories/categoriesPages/Sectionals';
import SofaAndLoveseat from './components/Categories/categoriesPages/SofaandLoveseat';
import ViewAll from './components/Categories/categoriesPages/ViewAll';

const App = () => {
  const [productData, setProductData] = useState({ products: [] });

  // we want to retrieve our data in the localStorage
  // we use localStorage.getItem('name of the storage')
  const localData = localStorage.getItem('Cart');

  // we want to be able to get the previous value of cartItems
  // ie. we dont want cartItems start of as empty if there is something there
  const [cartItems, setcartItems] = useState(
    // we use JSON.parse to return a usable object b/c localStorage stores it as a string object"{}"
    localData ? JSON.parse(localData) : []
  );

  // we use JSON.stringify because it helps us store our data as a JSON string object "{}"
  useEffect(() => {
    localStorage.setItem('Cart', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    axios
      .get('https://roomsofa.herokuapp.com/products')
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
      // console.log('found worked');
    }
    // if not, we want to add a quality property to the product object and set it to 1
    // and then add that product to our array
    else {
      product.quantity = 1;
      setcartItems((prevState) => [...prevState, product]);

      // console.log('this is the product', product);
    }
  };

  // remove item from cart function
  // basically remove this product object from the cartItems
  const removeItemFromCart = (e, product) => {
    alert('Item Removed');
  };

  // decrease the product quantity
  const decreaseProductQuantity = (e, product) => {
    alert('Quantity Increase ');
    product.quantity++;
  };

  // increase the product quantity
  const increaseProductQuantity = (e, product) => {
    alert('Item Removed');
    product.quantity = product.quantity - 1;
  };

  return (
    <React.StrictMode>
      <Router>
        <Home path="/" exact component={Home} />

        <Categories
          path="/categories"
          component={Categories}
          ProductData={productData}
        >
          <AccentChair path="accentchair" ProductData={productData} />
          <Chair path="chair" ProductData={productData} />
          <Recliner path="recliner" ProductData={productData} />
          <Sectionals path="sectionals" ProductData={productData} />
          <SofaAndLoveseat path="sofaandloveseat" ProductData={productData} />
          <ViewAll path="viewall" ProductData={productData} />
        </Categories>

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
