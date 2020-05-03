import React from 'react';
import './Categories.scss';
import Sidebar from '../../Sidebar/Sidebar';
import Footer from '../../Footer/footer';

const Categories = (props) => {
  return (
    <div className="Categories">
      <div className="categoriesContainer">
        <Sidebar />
        {props.children}
      </div>
      <Footer />
    </div>
  );
};

export default Categories;
