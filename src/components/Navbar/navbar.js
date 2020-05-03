import React from 'react';
import './navbar.scss';
import { Link } from '@reach/router';
import Dropdown from '../DropDown/dropdown';

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="navContainer">
        <div className="logo">
          <Link to="/">Room Sofas</Link>
        </div>

        <ul className="navbarCategoryLinks">
          <li>
            <Dropdown />
          </li>
          <li>
            <Link to="/categories/recliner">Recliners</Link>
          </li>
          <li>
            <Link to="/categories/sectionals">Sectionals</Link>
          </li>
        </ul>

        <div className="navbarUserLinks">
          <div>
            <Link to="/cart">
              <i className="fas fa-shopping-cart"></i>
              <p>cart</p>
            </Link>
          </div>
          <div>
            <Link to="/">
              <i className="far fa-user"></i>
              <p>account</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
