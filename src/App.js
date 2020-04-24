import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Router } from '@reach/router';
import Home from './components/pages/Home';
import Categories from './components/pages/Categories/Categories';
import ProductPage from './components/pages/Product';
import UploadProduct from './components/UploadProduct/UploadProduct';

const App = () => {
  useEffect(() => {});
  return (
    <React.StrictMode>
      <Router>
        <Home path="/" exact component={Home} />
        <Categories path="/categories" component={Categories} />
        <ProductPage path="/productPage" component={ProductPage} />
        <UploadProduct path="/admin/UploadProduct" component={UploadProduct} />
      </Router>
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
