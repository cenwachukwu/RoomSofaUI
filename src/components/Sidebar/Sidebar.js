import React from 'react';
import './Sidebar.scss';
import { Link } from '@reach/router';

const Sidebar = (props) => {
  return (
    <div className="Sidebar">
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Recliners</Link>
          </li>
          <li>
            <Link to="/">Sectionals</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
          <li>
            <Link to="/cart">
              <i className="fas fa-shopping-cart"></i>
            </Link>
          </li>
          <li className="noBorder">
            <Link to="/">
              <i className="far fa-user"></i>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
