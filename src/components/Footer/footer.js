import React from 'react';
import './footer.scss';

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer-div">
        <div className="FooterCategoryDiv">
          <div className="FooterCategory">
            <ul>
              <li>
                <a href="#">Delivery Policy</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Financing & Leasing</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">My Account</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="FooterIconsDiv">
          <div>
            <a href="#">Home</a>
          </div>
          <div className="FooterIconsDiv-icons">
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
          <div>
            <a href="#">Contact Us</a>
          </div>
        </div>
        <div className="FooterCopyRightDiv">
          <p>
            All rights reserved
            <span>
              <i className="fas fa-copyright"></i>
            </span>
            2020
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
