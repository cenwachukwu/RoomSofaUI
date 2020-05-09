import React, { useEffect, useState, useReducer } from 'react';
import ReactDOM from 'react-dom';
import { LocationProvider, Router } from '@reach/router';
import { history } from './routerHistory';
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

// redux
import { Provider, useSelector, useDispatch } from 'react-redux';
import store from './reduxStore';
import { listProducts } from './actions/productActions';

const App = () => {
  // Incorporating redux
  // instead of using useState to get our state we will use useSelector to get our state from redux
  // useSelector will accept the state parameter and return state.productList
  // remember we set this productList in reduxStore.js
  const productList = useSelector((state) => state.productList);
  // we are getting the states we named in productList... check productReducer.js in the reducer folder
  const { products, loading, error } = productList;
  // we use useDispatch to name an action we want useEffect to do
  const dispatch = useDispatch();

  useEffect(() => {
    // the action we want useEffect to do is make an api call to get our product data
    dispatch(listProducts());
    return () => {
      //
    };
  }, []);

  return (
    <React.StrictMode>
      <Router>
        <Home path="/" exact component={Home} />

        <Categories
          path="/categories"
          component={Categories}
          ProductData={products}
        >
          <AccentChair
            path="accentchair"
            ProductData={products.data}
            loading={loading}
            error={error}
          />
          <Chair
            path="chair"
            ProductData={products.data}
            loading={loading}
            error={error}
          />
          <Recliner
            path="recliner"
            ProductData={products.data}
            loading={loading}
            error={error}
          />
          <Sectionals
            path="sectionals"
            ProductData={products.data}
            loading={loading}
            error={error}
          />
          <SofaAndLoveseat
            path="sofaandloveseat"
            ProductData={products.data}
            loading={loading}
            error={error}
            component={SofaAndLoveseat}
          />
          <ViewAll
            path="viewall"
            ProductData={products.data}
            loading={loading}
            error={error}
          />
        </Categories>

        <ProductPage
          path="/productPage/:productid"
          component={ProductPage}
          ProductData={products.data}
          loading={loading}
          error={error}
        />

        <Cart path="/cart/*" component={Cart} />

        <UploadProduct path="/admin/UploadProduct" component={UploadProduct} />
      </Router>
    </React.StrictMode>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
