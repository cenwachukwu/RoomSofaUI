import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from '@reach/router';
import Home from './components/pages/Home';
import Categories from './components/pages/Categories/Categories';

const App = () => {
  return (
    <React.StrictMode>
      <Router>
        <Home path="/" exact component={Home} />
        <Categories path="/categories" component={Categories} />
      </Router>
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
