import React from 'react';
import './MobileNav.scss';
import { Link } from '@reach/router';
import Hamburger from './Hamburger';

const MobileNav = () => {
  return (
    <div className="MobileNav">
      <div className="MobileNav__container">
        <div className="MobileNav__logo">
          <Link to="/" className="MobileNav__logoLink">
            <h4 className="homeLogo">Room Sofas</h4>
          </Link>
        </div>
        <div>
          <div>
            <Hamburger />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
