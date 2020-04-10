import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from '@reach/router';

const App = () => {
  return (
    <React.StrictMode>
      <div className="App">
        <h1>Room Sofa</h1>
      </div>
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
