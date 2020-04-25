import React from 'react';
import { Link } from '@reach/router';
import './Hamburger.scss';
import Dropdown from '../DropDown/dropdown';

const Hamburger = () => {
  return (
    <div>
      <div className="Hamburger__wrapper">
        <input type="checkbox" className="toggler" />
        <div className="hamburger">
          <div className="hamburger-lines"></div>
        </div>
        <div className="fixednavbar">
          <div className="xyz">
            <div>
              <ul>
                <li>
                  <Link to="/" className="MobileNav__logoLink">
                    Home
                  </Link>
                </li>
                <li>
                  <Dropdown />
                </li>
                <li>
                  <Link to="/categories" className="MobileNav__logoLink">
                    Recliners
                  </Link>
                </li>
                <li>
                  <Link to="/" className="MobileNav__logoLink">
                    Sectionals
                  </Link>
                </li>
                <li>
                  <Link to="/" className="MobileNav__logoLink">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/" className="MobileNav__logoLink">
                    <i className="fas fa-shopping-cart"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/" className="MobileNav__logoLink">
                    <i className="far fa-user"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
