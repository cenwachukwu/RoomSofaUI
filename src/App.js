import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from '@reach/router';
import Home from './pages/Home';

const App = () => {
  return (
    <React.StrictMode>
      <div className="App">
        <Router>
          <Home path="/" />
        </Router>
      </div>
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
