import React from 'react';
import './navbar.scss';
import { Link } from '@reach/router';
import Dropdown from '../DropDown/dropdown';

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="navContainer">
        <div className="logo">
          <a href="#">Room Sofas</a>
        </div>

        <ul className="navbarCategoryLinks">
          <li>
            <Dropdown />
          </li>
          <li>
            <a href="#">Recliners</a>
          </li>
          <li>
            <a href="#">Sectionals</a>
          </li>
        </ul>

        <div className="navbarUserLinks">
          <div>
            <a href="#">
              <i className="fas fa-shopping-cart"></i>
              <p>cart</p>
            </a>
          </div>
          <div>
            <a href="#">
              <i className="far fa-user"></i>
              <p>account</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
