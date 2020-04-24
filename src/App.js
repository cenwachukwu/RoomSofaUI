import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Router } from '@reach/router';
import axios from 'axios';
import Home from './components/pages/Home';
import Categories from './components/pages/Categories/Categories';
import ProductPage from './components/pages/Product';
import UploadProduct from './components/UploadProduct/UploadProduct';

const App = () => {
  const [productData, setProductData] = useState({ products: [] });

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

  return (
    <React.StrictMode>
      <Router>
        <Home path="/" exact component={Home} />
        <Categories
          path="/categories"
          component={Categories}
          ProductData={productData}
        />
        <ProductPage path="/productPage" component={ProductPage} />
        <UploadProduct path="/admin/UploadProduct" component={UploadProduct} />
      </Router>
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
